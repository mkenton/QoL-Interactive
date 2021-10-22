import { createStore } from 'redux'

const defaultStore = { user: {user: "test store.js init user"} }

function reducer(store = defaultStore, action) {

    switch (action.type) {
        case "SETUSER":
            return { ...store, user: action.payload }
        default:
            return store
    }

}

export const store = createStore( reducer, defaultStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )