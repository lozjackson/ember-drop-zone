/**
  @module ember-drop-zone
*/
import Mixin from '@ember/object/mixin';
import { on } from '@ember/object/evented';

/**
  @class DroppableMixin
  @namespace Mixins
*/
export default Mixin.create({

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
	  @event onDrop
    @param {Object} event
	*/
	onDrop: on('drop', function (event) {
		event.preventDefault();
		this._drop(event);
  }),

  /**
    @event onDragEnter
    @param {Object} event
  */
	onDragEnter: on('dragEnter', function (event) {
		event.preventDefault();
		this._dragEnter(event);
		return false;
  }),

  /**
    @event onDragLeave
    @param {Object} event
  */
	onDragLeave: on('dragLeave', function (event) {
		event.preventDefault();
		this._dragLeave(...arguments);
		return false;
	}),

  /**
    @event onDragOver
    @param {Object} event
  */
	onDragOver: on('dragOver', function (event) {
		event.preventDefault();
		return false;
	})
});
