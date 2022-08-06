import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
    console.log('About to fetch the posts');
    await dispatch(fetchPosts());
    console.log('fetched posts');
    console.log(getState().posts);

    //Lodash statement
    // const userIds = _.uniq(_.map(getState().posts,'userId'));
    // console.log(userIds);
    // userIds.forEach(id => dispatch(fetchUser(id)));
    //userIds.map(id => dispatch(fetchUser(id)));

    //refractoring above statement
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

// export const fetchPosts = () => {

//     const promise =  jsonPlaceholder.get('/posts');

//     return {
//         type: "FETCH_POSTS",
//         payload: promise
//     };
// };

// return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({
//         type: "FETCH_POSTS",
//         payload: response
//     });
// };

//refracter

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    });
};

// export const fetchUser = id => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
// }

//memoize outer function - sending many request because we are returning the function. redux thunk still call the function 
//memoize inner function - still making many request because every time new version of the function created.

// export const fetchUser = function(id) {
//     return _.memoize(async function(dispatch)  {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
// };

// export const fetchUser = id => dispatch =>  _fetchUser(id,dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = id => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });

};
