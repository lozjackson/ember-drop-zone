import Ember from 'ember';
import DraggableMixin from 'ember-drop-zone/mixins/draggable';
import { module, test } from 'qunit';

const { typeOf } = Ember;

module('Unit | Mixin | draggable');

test('attributeBindings', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.deepEqual(subject.get('attributeBindings'), ['draggable']);
});

test('draggable should be true', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(subject.get('draggable'), true);
});

test('_dragStart() is a function', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(typeOf(subject._dragStart), 'function');
});

test('dragStart() is a function', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(typeOf(subject.dragStart), 'function');
});

test('dragStart() method calls stopPropagation', function(assert) {
  assert.expect(1);
  let event = { stopPropagation: () => assert.ok(true) };
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  subject.dragStart(event);
});

test('dragStart() method calls _dragStart()', function(assert) {
  assert.expect(1);
  let event = { stopPropagation: () => {} };
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create({
    _dragStart: (e) => assert.deepEqual(e, event)
  });
  subject.dragStart(event);
});
