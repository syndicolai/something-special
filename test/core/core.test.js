import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, getEntries} from '../../src/core/core';
import Entry from '../../src/core/models/entry'; 

describe('application logic', () => {
    describe('setEntries', () => {
        it('adds the entries to the state', () => {
            const state = Map();
            const entryOne = new Entry();
            const entryTwo = new Entry();
            
            const entries =[entryOne, entryTwo];    
            const nextState = setEntries(state, entries);
            
            expect(nextState).to.equal(Map({
                entries: List.of(entryOne, entryTwo)
            }));
        });
    });

    describe('getEntries', () => {
        it('fetches entries', () => {

        });
    });
});