// Action Creators
export const completeLesson = (id) => {
    return {
        type: "lessons/complete",
        payload: id,
    };
};

export const removeLesson = (id) => {
    return {
        type: "lessons/remove",
        payload: id,
    };
};

const initialState = {
    lessons: [
        { id: 1, title: "Moving Code", category: "VSCodeShortcuts" },
        { id: 2, title: "Copying Code", category: "VSCodeShortcuts" },
        { id: 3, title: "Deleting Code", category: "VSCodeShortcuts" },
    ],
};
// Reducers


export default function lessonsReducer(state = initialState, action) {
    switch (action.type) {
        case "lessons/complete":
            // console.log("state w/ complete: ", state)
            return state.map((lesson) => lesson.id === action.payload, {...state.lessons, category: "Completed"} );
        // {...state, action.payload};
        
        case "lessons/remove":
            // console.log("state w/ remove: ", state)
            return state.lessons.filter((lesson) => lesson.id !== action.payload);

        default:
            return state;
    }
}