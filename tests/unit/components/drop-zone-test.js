import { typeOf } from '@ember/utils';
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

test('getData() is a function', function(assert) {
  let component = this.subject();
  this.render();
  assert.equal(typeOf(component.getData), 'function');
});

test('getData() key', function(assert) {
  assert.expect(1);

  let event = {
    dataTransfer: {
      items: [ { kind: 'string' } ],
      getData: (type) => {
        assert.equal(type, 'foo');
        return '{"test":"1"}';
      }
    }
  };

  let component = this.subject();

  this.render();

  component.set('key', 'foo');
  component.getData(event);
});

test('getData() returns the correct data', function(assert) {
  assert.expect(1);

  let event = {
    dataTransfer: {
      items: [ { kind: 'string' } ],
      getData: () => '{"test":"1"}'
    }
  };

  let component = this.subject();
  this.render();

  assert.deepEqual(component.getData(event), { test: "1" });
});

test('drop() is a function', function(assert) {
  let component = this.subject();
  this.render();
  assert.equal(typeOf(component.drop), 'function');
});

test('drop() calls sendAction', function(assert) {
  assert.expect(2);

  let event = {
    key: 'text',
    dataTransfer: {
      items: [ { kind: 'string' } ],
      getData: (type) => {
        assert.equal(type, 'text');
        return '{"test":"1"}';
      }
    }
  };

  let component = this.subject({
    action: (data) => {
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
      items: [ { kind: 'string' } ],
      getData: (type) => {
        assert.equal(type, 'foo');
        return '{"test":"1"}';
      }
    }
  };

  let component = this.subject({
    action: () => {}
  });

  this.render();

  component.set('key', 'foo');
  component.drop(event);
});
