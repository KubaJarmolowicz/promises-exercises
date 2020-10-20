/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.catch(err => reject(err));
    promise.then(val => transformer(val))
            .then(newVal => resolve(newVal))
            .catch(err2 => reject(err2));

  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(val =>{
      if((typeof val=== Number)||(parseFloat(val))) reutrn (parseFloat(val)*parseFloat(val));
      else throw val;
    }).catch(err => `Cannot blablabliabla ${err}`);

}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(err=> new Promise(resolve =>{
      if(typeof err!== Number) resolve(0)
    }));
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};