import { createStore } from 'redux'

const countReducer = (state, action) => {
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

const storeData = createStore(countReducer, { counter: 0 });
export default storeData;

