/**
  @module ember-drop-zone
*/
import Component from '@ember/component';
import DroppableMixin from 'ember-drop-zone/mixins/droppable';
import layout from '../templates/components/drop-zone';
import { get } from '@ember/object';

/**
  @class DropZoneComponent
  @uses Mixins.DroppableMixin
  @namespace Components
*/
export default Component.extend(DroppableMixin, {

  layout,

  /**
    @property classNames
    @type {Array}
    @default `['ember-drop-zone', 'drop-zone']`
    @private
  */
  classNames: ['ember-drop-zone', 'drop-zone'],

  /**
    @property key
    @type {String}
    @default `text`
  */
  key: 'text',

  /**
    @method getData
    @param {Object} event
  */
  getData(event) {
    let json;
    if (event && event.dataTransfer && event.dataTransfer.items) {
      json = event.dataTransfer.getData(this.get('key'));
    }
    return json ? JSON.parse(json) : {};
  },

  /**
    @method drop
    @param {Object} event
  */
  drop(event) {
    const action = get(this, 'action');
    if (typeof action === 'function') {
      action(this.getData(event));
    }
  }
});
