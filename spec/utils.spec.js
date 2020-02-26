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
    const expected = [
      {
        description: 'The man, the Mitch, the legend',
        slug: 'mitch',
        currentTime: new Date().getDate()
      }
    ];
    expect(actual[0]).to.eql(expected[0]);
  });
  it('when given an array with many objects return all objects with a time stamp ', () => {
    const list = [
      {
        description: 'The man, the Mitch, the legend',
        slug: 'mitch'
      },
      {
        description: 'Not dogs',
        slug: 'cats'
      }
    ];
    const actual = formatDates(list);
    const expected = [
      {
        description: 'The man, the Mitch, the legend',
        slug: 'mitch',
        currentTime: new Date().getDate()
      },
      {
        description: 'Not dogs',
        slug: 'cats',
        currentTime: new Date().getDate()
      }
    ];
    expect(actual).to.eql(expected);
  });
});

describe('makeRefObj', () => {
  it('if given an array with an object return the array that is not the same as the one given and the object has to be difrent to ', () => {
    const list = [{}];
    const actual = makeRefObj(list);

    expect(actual).to.not.equal(list);
    expect(actual[0]).to.not.equal(list[0]);
  });
  it('change the structur of the object to make it so we just have an object with the values of the keys article_id and title ', () => {
    const list = [{ article_id: 1, title: 'A' }];
    const actual = makeRefObj(list);
    const expected = [{ A: 1 }];
    expect(actual).to.eql(expected);
  });
  it('restructure many objects in an array ', () => {
    const list = [
      { article_id: 1, title: 'A' },
      { article_id: 3, title: 'fg' }
    ];
    const actual = makeRefObj(list);
    const expected = [{ A: 1 }, { fg: 3 }];
    expect(actual).to.eql(expected);
  });
});

describe.only('formatComments', () => {
it('return a new array', () => {
  
});
});
