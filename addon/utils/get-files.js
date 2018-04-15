/**
  @module ember-drop-zone
*/

/**
  @class Utilities
  @namespace Utils
*/

/**
  ## Get files

  An array of file objects are returned.

  @method getFiles
  @param {Object} event
  @return {Array}
*/
export default function getFiles(event) {
  let data = [];
  if (event && event.dataTransfer && event.dataTransfer.items) {

    const files = event.dataTransfer.files

    if (files) {
      let filesLength = files.length;
      for (let i = 0; i < filesLength; i++) {
        data.push(files[i]);
      }
    }
  }
  return data;
}
