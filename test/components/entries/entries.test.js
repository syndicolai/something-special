import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Assert from 'assert';
import Entries from '../../../src/components/entries/entries';

import Entry from '../../../src/components/entries/entry';

function createComponent(props){
    return TestUtils.renderIntoDocument(<Entries {...props} />);
}

function createShallowComponent(props){
  const renderer = TestUtils.createRenderer();

  renderer.render(<Entries {...props} />);

  return renderer.getRenderOutput();
}

describe('entries tests', () => {
    it('generates list of entries', () => {
      let entries = [{one: 'entry'}, {two: 'entries'}, {three: 'entries'}];
      let component = createShallowComponent({entries: entries});
      console.log(component.props.children);
      //Assert(component.props.children === '<Entry /> <Entry> <Entry/>');

//       const renderer = ReactTestUtils.createRenderer();
// result = renderer.getRenderOutput();
// expect(result.type).toBe('div');
// expect(result.props.children).toEqual([
//   <span className="heading">Title</span>,
//   <Subcomponent foo="bar" />
// ]);

    });
});