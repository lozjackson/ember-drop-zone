import Ember from 'ember';
import DroppableMixin from 'ember-drop-zone/mixins/droppable';
import { module, test } from 'qunit';

const { typeOf } = Ember;

module('Unit | Mixin | droppable');

test('drop() is a function', function(assert) {
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
  assert.equal(typeOf(subject.drop), 'function');
});

test('drop() method calls preventDefault', function(assert) {
  assert.expect(1);
  let event = { preventDefault: () => assert.ok(true) };
  let DroppableObject = Ember.Object.extend(DroppableMixin);
  let subject = DroppableObject.create();
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
  let subject = DroppableObject.create();
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
  let subject = DroppableObject.create();
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
