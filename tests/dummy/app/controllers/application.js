import Ember from 'ember';

export default Ember.Controller.extend({
  myModel: Ember.computed(function () {
    return this.get('store').createRecord('my-model', {
      id: 1
    });
  }),

  actions: {
    dropItem(item) {
      Ember.Logger.debug('dropItem', item);
    }
  }
});
