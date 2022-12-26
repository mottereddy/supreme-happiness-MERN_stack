
export const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1,
            };
        case 'decrement':
            return {
                counter: state.counter - 1,
            }
        default: return state;
    }
}










// const intialState = {
//     count: 0,
// };
// export const reducer = (state = intialState, action) => {
//     switch (action.type) {
//         case 'Inc':
//             return {
//                 ...state,
//                 count: action.payload,
//             };
//         default: return state;
//     }
// };