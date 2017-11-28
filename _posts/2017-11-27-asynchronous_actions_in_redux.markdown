---
layout: post
title:      "Asynchronous actions in Redux"
date:       2017-11-28 03:29:08 +0000
permalink:  asynchronous_actions_in_redux
---


Redux is a great way to manage global state in your application.  It operates on reducers which are pure functions.  However it makes asynchronous actions difficult to execute.  To perform asynchronous actions, there are middlewares such as Thunk.  Middlewares are additional functions that are called right after an action is dispatched but before it is sent through the reducer.  As part of my final project, I needed to check if two card components were equal and change the state half a second later.  Unfortunately ```setTimeout()``` was not working as I wanted it to with Thunk.  

With some research I discovered the middleware [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware).  Promises are useful to perform an asynchronous like a synchronous one.  This makes it easier to chain multiple asynchronous functions.  For this middleware to work, a promise is returned in the action payload.  A promise can have two arguments, resolve or reject, and either is executed depending if the promise is successful.  The call to ```resolve()``` is wrapped by a ```setTimeout()``` function like this:

```
export const checkMatch = () => {
   return {
      type: 'CHECK_MATCH',
      payload: new Promise((resolve) => {
         setTimeout(() => { resolve() }, 500 )
      })
   }
}
```

```CHECK_MATCH``` is not actually called with this middleware.  After the promise is resolved, the dispatched action is ```CHECK_MATCH_FULFILLED``` so the state is not updated immediately.  I did not anticipate this part of Redux to be so challenging but it did force me to learn more promises.  


