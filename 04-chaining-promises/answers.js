/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(val => resolve(asyncTransformer(val)), err => reject(err));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(val => slowAsyncProcess(val));
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){


      getUserById(userId).then(usr=> {

      getOrganizationById(usr.organizationId).then(org =>{

              const userAndOrg= {...usr, organization: org};
              console.log(userAndOrg);
              return userAndOrg;
      })}, err=> err)
    .catch(err=>err);

  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};