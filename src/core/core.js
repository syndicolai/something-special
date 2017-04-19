import {List} from 'immutable';

export const INITIAL_STATE = new Map();

export function setEntries(state, entries){
    return state.set('entries', List(entries));   
}

export function getEntries(state){
    let entries = state.get('entries');
    console.log('HEYEHEY');
    console.log(entries);

    return entries; 
}