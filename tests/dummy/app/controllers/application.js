import Ember from 'ember';
import getFiles from 'ember-drop-zone/utils/get-files';

export default Ember.Controller.extend({

  getFiles,

  files: Ember.A([]),

  items: Ember.A([]),

  myModel: Ember.computed(function () {
    return this.get('store').createRecord('my-model', {
      id: 1
    });
  }),

  actions: {
    dropItem(item) {
      this.get('items').pushObject(item);
    },

    dropFile(files) {
      files.forEach(file => this.get('files').pushObject(file));
    }
  }
});
