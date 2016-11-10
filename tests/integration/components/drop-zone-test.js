import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drop-zone', 'Integration | Component | drop zone', {
  integration: true
});

test('has correct class names', function(assert) {
  this.render(hbs`{{drop-zone}}`);
  assert.equal(this.$('div.ember-drop-zone.drop-zone').length, 1, 'it has `.ember-drop-zone` and `.drop-zone` class names');
});
