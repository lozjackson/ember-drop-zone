import Ember from 'ember';

const Item = Ember.Object.extend({
  id: 1,
  type: 'my-model'
});

export default Ember.Controller.extend({
  myModel: Item.create(),

  actions: {
    dropItem(item) {
      Ember.Logger.debug('dropItem', item);
    }
  }
});
