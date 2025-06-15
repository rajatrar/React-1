const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
return {
    type:BUY_CAKE,
    info:'first redux action'
}

}

function buyIcecream(){
    return{
        type:BUY_ICECREAM
    }
}

const initialstate = {
    numofCakes:10,
    numofIcecream:20
}

const reducer = (state = initialstate , action) => {
    switch(action.type){
        case BUY_CAKE :return {
            ...state,
            numofCakes:state.numofCakes -1

        }

        case BUY_ICECREAM :return {
            ...state,
            numofIcecream:state.numofIcecream -1

        }
        default: return state
    }

}

const store = createStore(reducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Updated state:", store.getState());
});

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unsubscribe();
