import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Assert from 'assert';
import Entry from '../../../src/components/entries/entry';

function createComponent(props){
    return TestUtils.renderIntoDocument(<Entry {...props} />);
}

describe('entry test', () => {
    beforeEach(() => {
        
    });

    it('displays header', () => {
        let component = createComponent({header: 'This is the header'});
        let header = component.refs.header;
        Assert(header.innerHTML === 'This is the header');
    });

    it('displays date published', () => {
        let component = createComponent({publishedDate: '13.11.1985'});
        let publishedDate = component.refs.publishedDate;
        Assert(publishedDate.innerHTML === '13.11.1985');
    });

    it('displays entry text', () => {
        let component = createComponent({text: 'So this is the text..'});
        let text = component.refs.text;
        Assert(text.innerHTML === 'So this is the text..');
    });
});