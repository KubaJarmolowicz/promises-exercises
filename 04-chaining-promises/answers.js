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



    let user;

       return getUserById(userId)
        .then(usr=> {
          user= usr;
          return usr.organizationId})
        .then(orgID=> {
          return getOrganizationById(orgID)})
        .then(fetchedOrg=>{
          const userAndOrg= {...user, organization: fetchedOrg};
          console.log(userAndOrg);
          return userAndOrg;
        })
        .catch(err=>{
          return
        });



    // try{
    // const user= await getUserById(userId);

    // const org= await getOrganizationById(user.organizationId)

    //          const userAndOrg= {...user, organization: org};
    //          console.log(userAndOrg);
    //          return userAndOrg;
    // } catch(err){
    //   return
    // }

  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};