import Ember from 'ember';
import DraggableMixin from 'ember-drop-zone/mixins/draggable';

export default Ember.Component.extend(DraggableMixin, {
  classNames: ['draggable-item']
});
