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
	  @property classNameBindings
	  @type {Array}
		@private
		@default `['dropTarget']`
	*/
	classNameBindings: ['dropTarget'],

	/**
	  @property dropTarget
	  @type {Boolean}
		@private
		@default `false`
	*/
	dropTarget: false,

	/**
	  @method setDropTarget
		@param {Object} event
    @param {Boolean} value
	*/
	setDropTarget(event, value) {
		this.set('dropTarget', value);
	},

	/**
	  @method _drop
    @param {Object} event
		@private
	*/
	_drop(event) {
		if (this.get('element').contains(event.target)) {
			this.setDropTarget(event, false);
		}
	},

	/**
    @method _dragEnter
    @param {Object} event
		@private
  */
	_dragEnter(event) {
		if (this.get('element').contains(event.target)) {
			this.setDropTarget(event, true);
		}
	},

	/**
    @method _dragLeave
    @param {Object} event
		@private
  */
	_dragLeave(event) {
		if (this.get('element').contains(event.target)){
			this.setDropTarget(event, false);
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
