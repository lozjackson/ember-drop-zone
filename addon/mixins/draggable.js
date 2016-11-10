/**
  @module ember-drop-zone
*/
import Ember from 'ember';

/**
  @class DraggableMixin
  @namespace Mixins
*/
export default Ember.Mixin.create({

  /**
    @property attributeBindings
    @type {Array}
    @private
  */
  attributeBindings: ['draggable'],

  /**
    @property draggable
    @type {Boolean}
    @default true
  */
	draggable: true,

  /**
    @method _dragStart
    @param {Object} event
    @private
  */
  _dragStart(event) {
    let model = this.get('model');
    if (model) {
      let id = model.get('id');
  		let type = model.constructor.modelName;

      event.dataTransfer.setData("text", JSON.stringify({ id, type }));
    	event.dataTransfer.effectAllowed = 'copyMove';
    }
  },

  /**
	  @event dragStart
    @param {Object} event
	*/
	dragStart(event) {
    event.stopPropagation();
    this._dragStart(...arguments);
	}
});
