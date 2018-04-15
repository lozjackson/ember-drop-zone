import Component from '@ember/component';
import DraggableMixin from 'ember-drop-zone/mixins/draggable';

export default Component.extend(DraggableMixin, {
  classNames: ['draggable-item']
});
