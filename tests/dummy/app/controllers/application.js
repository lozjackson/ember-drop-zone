import Controller from '@ember/controller';
import getFiles from 'ember-drop-zone/utils/get-files';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({

  getFiles,

  files: A([]),

  items: A([]),

  myModel: computed(function () {
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
