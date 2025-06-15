// const redux = require('redux');
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')

// const initialstate  = {
//     loading:false,
//     users:[],
//     error:""
// }

// const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
// const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
// const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

// const fetchUserrequest = () => {
//     return {
//         type:FETCH_USER_REQUEST
//     }
// }

// const fetchUserSuccess = users => {
//     return {
//         type:FETCH_USER_SUCCESS,
//         payload:users
//     }
// }

// const fetchUserError = error => {
//     return {
//         type:FETCH_USER_ERROR,
//         payload:error
//     }
// }

// const reducer = (state = initialstate , action) => {
//     switch(action.type){
//         case FETCH_USER_REQUEST:
//             return {
//                 ...state,
//                 loading:true
//             }

//             case FETCH_USER_SUCCESS:
//             return {
//                 ...state,
//                 loading:false,
//                 users:action.payload,
//                 error:''
                
//             }

//              case FETCH_USER_ERROR:
//             return {
//                 ...state,
//                 loading:false,
//                 users:[],
//                 error:action.payload
                
//             }
//         default:
//             return state;
//     }
// }

// const fetchUser = () => {
//     return function (dispatch){
//         dispatch(fetchUserrequest())
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             const users = response.data.map(user => user.id)
//             dispatch(fetchUserSuccess(users))

//         })

//     }
// }

// const store = createStore(reducer,applyMiddleware(thunkMiddleware))
// store.subscribe(() =>{
//     console.log(store.getState())
// })
// store.dispatch(fetchUser())

const redux = require('redux');
const createStore = redux.createStore;
const axios = require('axios');

// Initial State
const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Action Types
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

// Action Creators
const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

const fetchUserSuccess = users => ({
    type: FETCH_USER_SUCCESS,
    payload: users
});

const fetchUserError = error => ({
    type: FETCH_USER_ERROR,
    payload: error
});

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
            return { loading: false, users: action.payload, error: '' };
        case FETCH_USER_ERROR:
            return { loading: false, users: [], error: action.payload };
        default:
            return state;
    }
};

// Create store (no middleware needed)
const store = createStore(reducer);

// Subscribe to store
store.subscribe(() => {
    console.log('Updated State:', store.getState());
});

// Async logic handled outside Redux
store.dispatch(fetchUserRequest());

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const users = response.data.map(user => user.id);
        store.dispatch(fetchUserSuccess(users));
    })
    .catch(error => {
        store.dispatch(fetchUserError(error.message));
    });
