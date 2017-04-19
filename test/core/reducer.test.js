import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import Reducer from '../../src/core/reducer';
import Entry from '../../src/core/models/entry';

describe('reducer tests', () => {
    describe('set entries', () => {
        it('handles sett entries', () => {
            const initalState = Map();
            let theEntry = new Entry();

            const action = {type: 'SET_ENTRIES', entries: [theEntry]}
            const nextState = Reducer(initalState, action);

            expect(nextState).to.equal(fromJS({
                entries: [theEntry]
            }));
        });
    });

    describe('get entries', () => {
        it('returns entries', () => {
            let entries = [new Entry(), new Entry()];
            let state = given.entriesExists(entries);

            const action = {type: 'GET_ENTRIES'};
            const nextState = Reducer(state, action);

            expect(nextState).to.equal(fromJS({
                entries: entries
            }));
        });
        
    });
});

let given = {
    entriesExists: entries => Reducer(Map(), entries)
}
