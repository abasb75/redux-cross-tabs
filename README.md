# What is Redux-Cross-Tabs?

Redux-Cross-Tabs is a Redux framework that helps to save states in browser storage and synchronize them in different browser tabs.

<image src="https://github.com/abasb75/redux-cross-tabs/blob/main/assets/multi-tab-screen.gif" alt="redux-cross-tabs package">



# Installation :

install with command line:
```sh
npm i redux react-redux redux-cross-tabs
```

# define your initialState

```javascript
// store/initialState.js

const initialState = {
    counter:{
        value:0
    },
    darkMoade:{
        state:false,
    }
}

export default initialState;

```

# Create redux actions

```javascript
// store/action.js

export function counterUp(){
    return {
        type:'COUNTER_UP',
    }
}

export function counterDown(){
    return {
        type:'COUNTER_DOWN',
    }
}

export function toggleDarkMode(){
    return {
        type:'DARKMODE',
    }
}

```

# Create your reducer 

```javascript
// store/reducer.js

import initialState from "./initialState";
import { combineReducers } from "redux"; 
// also this work : import { combineReducers } from "redux-cross-tabs"; 

function counterReducer(counter=initialState.counter , action){
    switch(action.type){
        case 'COUNTER_UP':
            return {
                ...counter,
                value:counter.value+1 
            }
        case 'COUNTER_DOWN':
            return {
                ...counter,
                value:counter.value-1 
            }
        default:
            return counter;
    }
}

function darkModeReducer(darkMode=initialState.darkMode , action){
    switch(action.type){
        case 'DARKMODE':
            return {
                ...darkMode,
                darkMode:!darkMode.state 
            }
        default:
            return state;
    }
}


const reducer = combineReducers({
    darkMode:darkModeReducer,
    counter:counterReducer,
})

export default reducr;


```


# Create your store 

```javascript
// store/index.js

import { createStore } from "redux-cross-browser";
// **this not work : import { createStore } from "redux";

import reducer from "./reducer";
import initialState from "./initialState";

const params = {
    storageItems:['darkMode','counter'], // all state properties that you need to save on browser
    storageKey:'REDUX-PRO-4KJNDCO98NOEINEIEWNEW',
    actionType:'REDUX-PRO-EJ9EECNEEIODJEIOJEIEI',
}

const store:Store = createStore(
    reducer,
    initialState,
    undefiend, // optional : pass applyMiddlewares or undefiend
    params, // optional : params is a object to setup ReduxCrossBrowser
);

export default store;


```

# Wrap your app with ReduxCrossTabsProvider (Provider)

Wrapp your app with ReduxCrossTabs Provider:

```javascript
// src/index.js

import { Provider } from 'redux-cross-tabs'; 
//** important: dont import Provider from react-redux
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


```