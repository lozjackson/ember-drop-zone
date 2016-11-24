# Ember-drop-zone

Ember-drop-zone is an Ember-cli addon that provides a drop-zone component.

## Install

* `ember install ember-drop-zone`

## Use

### DropZoneComponent

Create a drop-zone using the `{{drop-zone}}` component.

```hbs
{{#drop-zone action="doSomething"}}
  drop items here...
{{/drop-zone}}
```

Then handle the action in your controller or component.

```js
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doSomething(droppedItem) {
      // do something with `droppedItem`
    }
  }
});
```

By default the `DropZoneComponent` component will extract string data from the `event.dataTransfer` object.

### Get Files

The `DropZoneComponent` be setup to enable dropping files onto it.  First, you need to import the `getFiles` method into your controller or component.

```js
import getFiles from 'ember-drop-zone/utils/get-files';

export default Ember.Component.extend({
  getFiles
});
```

Then assign the `getFiles` method to the `getData` method of the `DropZoneComponent`.   This will change the behavior of the `DropZoneComponent` so that it will extract files from the `event.dataTransfer` object instead of text.

```hbs
{{#drop-zone action="doSomething" getData=getFiles}}
  Drop files here...
{{/drop-zone}}
```

### DroppableMixin

You can use the `DroppableMixin` to create your own drop-zone.

```js
// my-drop-zone.js
import Ember from 'ember';
import DroppableMixin from 'ember-drop-zone/mixins/droppable';

export default Ember.Component.extend(DroppableMixin, {

  drop(event) {
    // do something...
  }

});
```

### DraggableMixin

You can use the `DraggableMixin` to create a draggable component.  Add the `DraggableMixin`
to a component that you want to make draggable.

```js
import Ember from 'ember';
import DraggableMixin from 'ember-drop-zone/mixins/draggable';

export default Ember.Component.extend(DraggableMixin, {
  // ...
});
```

By default the `DraggableMixin` will look for a `model` on the component and send
the `id` and `type` of that model encoded as JSON to the `event.dataTransfer` Object.

## Installation for development

* `git clone <repository-url>` this repository
* `cd ember-drop-zone`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
