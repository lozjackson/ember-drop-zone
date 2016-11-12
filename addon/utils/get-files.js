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
  let i, files, data = [];
  if (event && event.dataTransfer && event.dataTransfer.items) {
    if (files = event.dataTransfer.files) {
      let filesLength = files.length;
      for (i = 0; i < filesLength; i++) {
        data.push(files[i]);
      }
    }
  }
  return data;
}
