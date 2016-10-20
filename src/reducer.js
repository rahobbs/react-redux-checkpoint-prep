const ADD_ITEM_TO_REGISTRY = 'ADD_ITEM_TO_REGISTRY';

//Reducers say what happens to the store given an action

//create an initial state whose one prop, registryItems, is an empty array
const initialState = {
  registryItems: []
};

export default (state = initialState, action) => {
    switch(action.type) {
      case ADD_ITEM_TO_REGISTRY:
      //creates a new obj, copies current state props to it, concats new
      //item (that's on the action) to the registryItems array
      //NOTE how Object.assign works
        return Object.assign({}, ...state, {registryItems: state.registryItems.concat(action.item)});
      default: return state
    }
};
