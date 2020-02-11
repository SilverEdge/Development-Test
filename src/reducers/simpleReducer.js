/*
 src/reducers/simpleReducer.js
*/

const appState = {
    test: 'redux yes!',
}

export default (state = appState, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            if(state.test === 'redux yes!') {
                state.test = 'redux no!';
            } else {
                state.test = 'redux yes!';
            }
            return {
                ...state
            }
    default:
        return state
    }
}