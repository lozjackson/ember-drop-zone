import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('drop-zone', 'Unit | Component | drop zone', {
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('key should be text', function(assert) {
  let component = this.subject();
  this.render();
  assert.equal(component.get('key'), 'text');
});

test('drop() is a function', function(assert) {
  let component = this.subject();
  this.render();
  assert.equal(Ember.typeOf(component.drop), 'function');
});

test('drop() calls sendAction', function(assert) {
  assert.expect(3);

  let event = {
    key: 'text',
    dataTransfer: {
      getData: (type) => {
        assert.equal(type, 'text');
        return '{"test":"1"}';
      }
    }
  };

  let component = this.subject({
    sendAction: (actionName, data) => {
      assert.equal(actionName, 'action');
      assert.deepEqual(data, { test: "1" });
    }
  });

  this.render();
  component.drop(event);
});

test('drop() getData key', function(assert) {
  assert.expect(1);

  let event = {
    preventDefault: () => {},
    dataTransfer: {
      getData: (type) => {
        assert.equal(type, 'foo');
        return '{"test":"1"}';
      }
    }
  };

  let component = this.subject({
    sendAction: () => {}
  });

  this.render();

  component.set('key', 'foo');
  component.drop(event);
});
