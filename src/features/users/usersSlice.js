// // Action Creators

// // test with username: "firstuser", password: "firstpass")
// export function fetchUser() {
//     return function (dispatch) {
        
//         dispatch({ type: "users/usersLoading" });
//         fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ user }),
//         })
//             .then((r) => r.json())
//             .then((data) => {
//                 localStorage.token = data.jwt;
//                 dispatch({
//                     type: "users/usersLoaded",
//                     payload: data,
//                 })
//             })
//     }
// }

// // Reducers
// const initialState = {
//     user: { username: "firstuser", password: "firstpass" }, //array of users
//     status: "idle", //loading status for fetch
// };

// export default function usersReducer(state = initialState, action) {
//     switch (action.type) {
//         case "users/usersLoaded":
//             return {
//                 ...state,
//                 status: "idle",
//                 user: action.payload,
//             };
//         case "users/usersLoading":
//             return {
//                 ...state,
//                 status: "loading",
//             };
//         default:
//             return state;
//     }
// }
