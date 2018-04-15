import EmberObject from '@ember/object';
import { sendEvent } from '@ember/object/events';
import { typeOf } from '@ember/utils';
import DroppableMixin from 'ember-drop-zone/mixins/droppable';
import { module, test } from 'qunit';

module('Unit | Mixin | droppable');

test('setDropTarget() is a function', function(assert) {
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.setDropTarget), 'function');
});

test('setDropTarget() sets dropTarget', function(assert) {
  let event = { target: { foo: 'bar' } };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: false });

  subject.setDropTarget(event, true);
  assert.equal(subject.get('dropTarget'), true);

  subject.setDropTarget(event, false);
  assert.equal(subject.get('dropTarget'), false);
});

test('_drop() is a function', function(assert) {
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject._drop), 'function');
});

test('_drop() calls setDropTarget(event, false)', function(assert) {
  assert.expect(3);
  let event = { target: { foo: 'bar' } };
  let element = {
    contains: target => {
      assert.equal(target, event.target);
      return true;
    }
  };
  let DroppableObject = EmberObject.extend(DroppableMixin);
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
  assert.expect(2);

  let event = { target: { foo: 'bar' } };
  let element = {
    contains: target => {
      assert.equal(target, event.target);
      return true;
    }
  };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: true, element });
  subject._drop(event);
  assert.equal(subject.get('dropTarget'), false);
});

test('_dragEnter() is a function', function(assert) {
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject._dragEnter), 'function');
});

test('_dragEnter() calls setDropTarget(event, true)', function(assert) {
  assert.expect(3);
  let event = { target: { foo: 'bar' } };
  let element = {
    contains: target => {
      assert.equal(target, event.target);
      return true;
    }
  };
  let DroppableObject = EmberObject.extend(DroppableMixin);
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
  assert.expect(2);
  let event = { target: { foo: 'bar' } };
  let element = {
    contains: target => {
      assert.equal(target, event.target);
      return true;
    }
  };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: false, element });
  subject._dragEnter(event);
  assert.equal(subject.get('dropTarget'), true);
});

test('_dragLeave() is a function', function(assert) {
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject._dragLeave), 'function');
});

test('_dragLeave() calls setDropTarget(event, false)', function(assert) {
  assert.expect(3);
  let event = { target: { foo: 'bar' } };
  let element = {
    contains: target => {
      assert.equal(target, event.target);
      return true;
    }
  };
  let DroppableObject = EmberObject.extend(DroppableMixin);
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
  assert.expect(2);
  let event = { target: { foo: 'bar' } };
  let element = {
    contains: target => {
      assert.equal(target, event.target);
      return true;
    }
  };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ dropTarget: true, element });
  subject._dragLeave(event);
  assert.equal(subject.get('dropTarget'), false);
});

// events

test('onDrop calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ _drop: () => {} });
  sendEvent(subject, 'drop', [ event ]);
});

test('onDrop calls _drop', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => {} };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({
    _drop: (e) => assert.deepEqual(e, event)
  });
  sendEvent(subject, 'drop', [ event ]);
});

test('onDragEnter calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ _dragEnter: () => {} });
  sendEvent(subject, 'dragEnter', [ event ]);
});

test('onDragEnter calls _dragEnter', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => {} };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({
    _dragEnter: (e) => assert.deepEqual(e, event)
  });
  sendEvent(subject, 'dragEnter', [ event ]);
});

test('onDragLeave() calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({ _dragLeave: () => {} });
  sendEvent(subject, 'dragLeave', [ event ]);
});

test('onDragLeave() calls _dragLeave', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => {} };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create({
    _dragLeave: (e) => assert.deepEqual(e, event)
  });
  sendEvent(subject, 'dragLeave', [ event ]);
});

test('onDragOver() calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = EmberObject.extend(DroppableMixin);
  let subject = DroppableObject.create();
  sendEvent(subject, 'dragOver', [ event ]);
});
