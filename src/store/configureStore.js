import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// ************ Import Reducers Here ************ //
import mockReducer from '../reducers/mockReducer' // Replace with actual reducer, this is just a placeholder

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        //reducername: reducer variable
        mock: mockReducer // Replace with actual reducer, this is just a placeholder
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };