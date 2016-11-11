import Ember from 'ember';
import DroppableMixin from 'ember-drop-zone/mixins/droppable';
import { module, test } from 'qunit';

const { typeOf } = Ember;

module('Unit | Mixin | droppable');

test('setDropTarget() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.setDropTarget), 'function');
});

test('setDropTarget() sets dropTarget', function(assert) {
  let event = { target: { foo: 'bar' } };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: false });

  subject.setDropTarget(event, true);
  assert.equal(subject.get('dropTarget'), true);

  subject.setDropTarget(event, false);
  assert.equal(subject.get('dropTarget'), false);
});

test('_drop() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject._drop), 'function');
});

test('_drop() calls setDropTarget(event, false)', function(assert) {
  assert.expect(2);
  let element = { foo: 'bar' };
  let event = { target: element };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({
    element,
    setDropTarget: (e, value) => {
      assert.deepEqual(e, event);
      assert.deepEqual(value, false);
    }
  });
  subject._drop(event);
});

test('_drop() sets dropTarget to false', function(assert) {
  assert.expect(1);

  let element = { foo: 'bar' };
  let event = { target: element };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: true, element });
  subject._drop(event);
  assert.equal(subject.get('dropTarget'), false);
});

test('_dragEnter() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject._dragEnter), 'function');
});

test('_dragEnter() calls setDropTarget(event, true)', function(assert) {
  assert.expect(2);
  let element = { foo: 'bar' };
  let event = { target: element };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({
    element,
    setDropTarget: (e, value) => {
      assert.deepEqual(e, event);
      assert.deepEqual(value, true);
    }
  });
  subject._dragEnter(event);
});

test('_dragEnter() sets dropTarget to true', function(assert) {
  assert.expect(1);
  let element = { foo: 'bar' };
  let event = { target: element };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: false, element });
  subject._dragEnter(event);
  assert.equal(subject.get('dropTarget'), true);
});

test('_dragLeave() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject._dragLeave), 'function');
});

test('_dragLeave() calls setDropTarget(event, false)', function(assert) {
  assert.expect(2);
  let element = { foo: 'bar' };
  let event = { target: element };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({
    element,
    setDropTarget: (e, value) => {
      assert.deepEqual(e, event);
      assert.deepEqual(value, false);
    }
  });
  subject._dragLeave(event);
});

test('_dragLeave() sets dropTarget to false', function(assert) {
  assert.expect(1);
  let element = { foo: 'bar' };
  let event = { target: element };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: true, element });
  subject._dragLeave(event);
  assert.equal(subject.get('dropTarget'), false);
});

// events

test('drop() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.drop), 'function');
});

test('drop() method calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ _drop: () => {} });
  subject.drop(event);
});

test('drop() method calls _drop', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => {} };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({
    _drop: (e) => assert.deepEqual(e, event)
  });
  subject.drop(event);
});

test('dragEnter() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.dragEnter), 'function');
});

test('dragEnter() method calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ _dragEnter: () => {} });
  subject.dragEnter(event);
});

test('dragEnter() method calls _dragEnter', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => {} };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({
    _dragEnter: (e) => assert.deepEqual(e, event)
  });
  subject.dragEnter(event);
});

test('dragLeave() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.dragLeave), 'function');
});

test('dragLeave() method calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({ _dragLeave: () => {} });
  subject.dragLeave(event);
});

test('dragLeave() method calls _dragLeave', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => {} };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create({
    _dragLeave: (e) => assert.deepEqual(e, event)
  });
  subject.dragLeave(event);
});

test('dragOver() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.dragOver), 'function');
});

test('dragOver() method calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  subject.dragOver(event);
});
