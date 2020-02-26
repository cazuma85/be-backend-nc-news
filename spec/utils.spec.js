const { expect } = require('chai');
const {
  formatDates,
  makeRefObj,
  formatComments
} = require('../db/utils/utils');

describe('formatDates', () => {
  it('if given an empty array return an empty array that is not the same as the one given  ', () => {
    const list = [];
    const actual = formatDates(list);
    expect(actual).to.eql([]);
    expect(actual).to.not.equal(list);
  });
  it('when given an array with one object return that array with a time stramp added to the object ', () => {
    const list = [
      {
        description: 'The man, the Mitch, the legend',
        slug: 'mitch'
      }
    ];
    const actual = formatDates(list);
    const expected =[
      {
        description: 'The man, the Mitch, the legend',
        slug: 'mitch',
        currentTime: new Date()
      }
    ]
    expect(actual[0]).to.eql(expected[0]);
  });
});

describe('makeRefObj', () => {});
it('', () => {
  
});
describe('formatComments', () => {});
