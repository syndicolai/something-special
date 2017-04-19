import {setEntries, getEntries, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'GET_ENTRIES':
            return getEntries(state);        
    }

    return state;
}