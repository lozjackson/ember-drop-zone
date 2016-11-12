import Ember from 'ember';
import getFiles from 'dummy/utils/get-files';
import { module, test } from 'qunit';

module('Unit | Utility | get files');


test('getFiles is a function', function(assert) {
  assert.equal(Ember.typeOf(getFiles), 'function');
});

test('it returns the files array form the dataTransfer object', function(assert) {

  let event = {
    dataTransfer: {
      items: [ { kind: 'File' } ],
      files: [
        {
          lastModified: 1338461011000,
          lastModifiedDate:"Thu May 31 2012 11:43:31 GMT+0100 (BST)",
          name:"test.php",
          size:3058,
          type:"text/php"
        },
        {
          lastModified: 1338461011000,
          lastModifiedDate:"Thu May 31 2012 11:43:31 GMT+0100 (BST)",
          name:"another-test.php",
          size:3058,
          type:"text/php"
        }
      ]
    }
  };

  let files = getFiles(event);

  assert.deepEqual(files, event.dataTransfer.files);
  assert.deepEqual(files.length, 2);
});
