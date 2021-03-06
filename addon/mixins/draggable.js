/**
  @module ember-drop-zone
*/
import Mixin from '@ember/object/mixin';
import { get } from '@ember/object';

/**
  @class DraggableMixin
  @namespace Mixins
*/
export default Mixin.create({

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

  /**
    @method serialize
    @private
    @return {Object}
  */
  serialize() {
    let id, type;
    let model = get(this, 'model');
    if (model) {
      id = get(model, 'id');
      type = get(model, 'constructor.modelName') || get(model, '_internalModel.modelName');
    }
    return { id, type };
  },

  /**
    @method setData
    @param {Object} event
    @param {String} string
    @private
  */
  setData(event, string) {
    event.dataTransfer.setData("text", string);
  },

  /**
    @method setEffectAllowed
    @param {Object} event
    @private
  */
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
