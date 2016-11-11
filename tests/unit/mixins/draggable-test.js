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

test('effectAllowed should be copyMove', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(subject.get('effectAllowed'), 'copyMove');
});

test('serialize() is a function', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(typeOf(subject.serialize), 'function');
});

test('serialize()', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create({
    model: { id: 1, constructor: { modelName: 'foo' } }
  });
  assert.deepEqual(subject.serialize(), { id: 1, type: 'foo' });
});


test('setData() is a function', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(typeOf(subject.setData), 'function');
});

test('setData() calls dataTransfer.setData()', function(assert) {
  assert.expect(4);
  let event = {
    preventDefault: () => assert.ok(true),
    key: 'text',
    dataTransfer: {
      setData: (type, data) => {
        assert.equal(typeOf(type), 'string');
        assert.equal(type, 'text');
        assert.equal(typeOf(data), 'string');
        assert.equal(data, 'foo');
      }
    }
  };

  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  subject.setData(event, 'foo');
});

test('setEffectAllowed() is a function', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(typeOf(subject.setEffectAllowed), 'function');
});

test('setEffectAllowed() sets dataTransfer.effectAllowed', function(assert) {
  let event = {
    dataTransfer: {
      effectAllowed: null
    }
  };
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  subject.setEffectAllowed(event);
  assert.equal(event.dataTransfer.effectAllowed, 'copyMove');

  subject.set('effectAllowed', 'foo');
  subject.setEffectAllowed(event);
  assert.equal(event.dataTransfer.effectAllowed, 'foo');
});

test('_dragStart() is a function', function(assert) {
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create();
  assert.equal(typeOf(subject._dragStart), 'function');
});

test('_dragStart() method calls setEffectAllowed', function(assert) {
  assert.expect(1);
  let event = { foo: 'bar' };
  let DraggableObject = Ember.Object.extend(DraggableMixin);
  let subject = DraggableObject.create({
    setData: () => {},
    setEffectAllowed: (e) => assert.deepEqual(e, event)
  });
  subject._dragStart(event);
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
  let subject = DraggableObject.create({
    setData: () => {},
    setEffectAllowed: () => {}
  });
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
