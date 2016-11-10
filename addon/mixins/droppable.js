/**
  @module ember-drop-zone
*/
import Ember from 'ember';

/**
  @class DroppableMixin
  @namespace Mixins
*/
export default Ember.Mixin.create({

	/**
	  @event drop
    @param {Object} event
	*/
	drop(event) {
		event.preventDefault();
	},

  /**
    @event dragEnter
    @param {Object} event
  */
	dragEnter(event) {
		event.preventDefault();
		return false;
	},

  /**
    @event dragLeave
    @param {Object} event
  */
	dragLeave(event) {
		event.preventDefault();
		return false;
	},

  /**
    @event dragOver
    @param {Object} event
  */
	dragOver(event) {
		event.preventDefault();
		return false;
	}
});
