export default (state=[], action) => {

    // if(action.type === 'FETCH_POSTS'){
    //     return action.payload;
    // }

    // return state;

    //switch statement always helps to handle multiple actions

    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;

    }
};