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
      .then(val => {return new Promise((resolve, reject)=>{
        if(typeof val==='number') resolve(val*val);
        if(!Number.isNaN(parseFloat(val))) resolve(parseFloat(val)*parseFloat(val));
        if(Number.isNaN(parseFloat(val))) reject(`Cannot convert '${val}' to a number!`);
      })}, err =>  new Promise((resolve, reject)=>{
        reject(err);
      }));
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
      //if(typeof err!== 'number')
      resolve(0);
      //else throw new Error(err);
    }));

}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(val=>{
    throw val
  }, err=> err);
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