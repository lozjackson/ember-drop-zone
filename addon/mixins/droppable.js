/**
  @module ember-drop-zone
*/
import Ember from 'ember';

/**
  @class DroppableMixin
  @namespace Mixins
*/
export default Ember.Mixin.create({

	classNameBindings: ['dropTarget'],

	/**
	  @property dropTarget
	  @type {Boolean}
		@private
		@default `false`
	*/
	dropTarget: false,

	/**
	  @method _drop
    @param {Object} event
		@private
	*/
	_drop(event) {
		if (event && event.target === this.get('element')) {
			this.set('dropTarget', false);
		}
	},

	/**
    @method _dragEnter
    @param {Object} event
		@private
  */
	_dragEnter(event) {
		if (event && event.target === this.get('element')) {
			this.set('dropTarget', true);
		}
	},

	/**
    @method _dragLeave
    @param {Object} event
		@private
  */
	_dragLeave(event) {
		if (event.target === this.get('element')) {
			this.set('dropTarget', false);
		}
	},

	/**
	  @event drop
    @param {Object} event
	*/
	drop(event) {
		event.preventDefault();
		this._drop(...arguments);
	},

  /**
    @event dragEnter
    @param {Object} event
  */
	dragEnter(event) {
		event.preventDefault();
		this._dragEnter(...arguments);
		return false;
	},

  /**
    @event dragLeave
    @param {Object} event
  */
	dragLeave(event) {
		event.preventDefault();
		this._dragLeave(...arguments);
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
