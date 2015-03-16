import { fetch } from './api';

function runExample() {

  var promise = fetch()

  promise = promise.then(() => {
    console.log('Running `then` handler');

    if (window.__throwInsideHandler) {
      throw new Error('Exception thrown from .then handler');
    }

    if (window.__runtimeExceptionInsideHandler) {
      a
    }

  });


  if (!window.__omitCatchHandler) {

    promise = promise.catch(() => {
      console.log('Running `catch` handler');

      if (window.__throwInsideHandler) {
        throw new Error('Exception thrown from .then handler');
      }

      if (window.__runtimeExceptionInsideHandler) {
        a
      }
    });

  }

  if (window.__doneHandler) {
    promise = promise.done();
  }
};


window.runExample = function(library) {
  window.__library = library;

  window.__rejectPromise = document.querySelector('#reject-checkbox').checked;
  window.__throwInsideHandler = document.querySelector('#throw-checkbox').checked;
  window.__runtimeExceptionInsideHandler = document.querySelector('#runtime-checkbox').checked;
  window.__omitCatchHandler = document.querySelector('#catch-checkbox').checked;
  window.__doneHandler = document.querySelector('#done-checkbox').checked;

  runExample();
};