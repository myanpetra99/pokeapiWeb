import { createStore } from "redux";

function reducer(state = 0, action) {
    switch (action.type) {
      case 'CATCH_POKEMON':
        return state + 1;
      default:
        return state
    }
  }

function catchPokemon(){
    return{
        type: 'CATCH_POKEMON',
        info: 'Catch Pokemon'
    }
}
  
  
  
  store.dispatch({
    type: 'ADD_TODO',
    text: 'Read the docs'
  })
  
  const store = createStore(reducer)
  console.log(store.getState())
  store.subscribe(()=>{  console.log(store.getState())})
  store.dispatch(catchPokemon())
  store.dispatch(catchPokemon())
