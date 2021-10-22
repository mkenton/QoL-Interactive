// import { createStore } from 'redux'

// const defaultStore = {
//     lessons: [
//         { id: 1, title: "Moving Code", category: "VSCodeShortcuts" },
//         { id: 2, title: "Copying Code", category: "VSCodeShortcuts" },
//         { id: 3, title: "Deleting Code", category: "VSCodeShortcuts" },
//     ],
//     users: [],
// }


// function reducer(store = defaultStore, action) {

//     switch (action.type) {
//         case "lessons/complete":
//             return { ...store, lessons: [...store.lessons, action.payload] }
//         case "SETUSER":
//             return { ...store, users: [...store.users, action.payload] }
//         default:
//             return store
//     }

// }

// export const store = createStore(reducer, defaultStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())