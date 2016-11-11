/**
  @module ember-drop-zone
*/
import Ember from 'ember';

const { get } = Ember;

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
    @property effectAllowed
    @type {String}
    @default `copyMove`
  */
  effectAllowed: 'copyMove',

  serialize() {
    let id, type;
    let model = get(this, 'model');
    if (model) {
      id = get(model, 'id');
  		type = get(model, 'constructor.modelName') || get(model, '_internalModel.modelName');
    }
    return { id, type };
  },

  setData(event, data) {
    event.dataTransfer.setData("text", data);
  },

  setEffectAllowed(event) {
    event.dataTransfer.effectAllowed = get(this, 'effectAllowed');
  },

  /**
    @method _dragStart
    @param {Object} event
    @private
  */
  _dragStart(event) {
    this.setData(event, JSON.stringify(this.serialize()));
    this.setEffectAllowed(event);
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
