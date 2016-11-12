/**
  @module ember-drop-zone
*/
import Ember from 'ember';
import DroppableMixin from 'ember-drop-zone/mixins/droppable';
import layout from '../templates/components/drop-zone';

/**
  @class DropZoneComponent
  @uses Mixins.DroppableMixin
  @namespace Components
*/
export default Ember.Component.extend(DroppableMixin, {

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
    @method drop
    @param {Object} event
  */
  drop(event) {
    this.sendAction('action', JSON.parse(event.dataTransfer.getData(this.get('key'))));
	}
});
