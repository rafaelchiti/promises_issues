import request from 'superagent';
import when from 'when';
import ThenPromise from 'promise';
import BluebirdPromise from 'bluebird';
import {Promise as ES6Promise} from 'es6-promise';

export let fetch = () => {
  var promise;


  // Using when;
  if (window.__library === 'when') {
    promise = when.promise( (resolve, reject) => run(resolve, reject) );
  }

  // Using then-promise npm name promise
  if (window.__library === 'then') {
    promise = new ThenPromise( (resolve, reject) => run(resolve, reject) );
  }

  // Using bluebird
  if (window.__library === 'bluebird') {
    promise = new BluebirdPromise( (resolve, reject) => run(resolve, reject) );
  }

  // ES6 promise
  if (window.__library === 'es6-promise') {
    promise = new ES6Promise( (resolve, reject) => run(resolve, reject) );
  }


  return promise;
}




function run(resolve, reject) {
  var getDate = request.get('http://date.jsontest.com/');
  getDate.end((response) => {

    if (window.__rejectPromise) {
      reject(response);
    } else {
      resolve(response);
    }

  });
}
