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
  it('make sure i `am not mutating data ', () => {});
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
  it('make sure i `am not mutating data ', () => {});
});

describe.only('formatComments', () => {
  it('return a new array', () => {
    const comments = [];
    const articleRef = [];
    //const expected
    const actual = formatComments(comments, articleRef);
    expect(actual).to.eql([]);
  });
  it('make all the /created by / belongs to etc...in an object in the returned array ', () => {
    const comments = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: 'butter_bridge',
        votes: 16,
        created_at: 1511354163389
      }
    ];
    const articleRef = [{ A: 1 }];
    const expected = [
      {
        author: 'butter_bridge',
        article_id: 'A',
        created_at: 1511354163389
      }
    ];
    const actual = formatComments(comments, articleRef);
    expect(actual).to.eql(expected);
  });
  it('make all the/ created by / belongs to etc...in many objects for many objects in the returned array ', () => {
    const comments = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: 'butter_bridge',
        votes: 16,
        created_at: 1511354163389
      },
      {
        body:
          "blablablablablablablbalbalabakfugeugd",
        belongs_to: "They're not exactly people, are they?",
        created_by: 'brandy_scotsh',
        votes: 1200,
        created_at: 1811454168319
      }
    ];
    const articleRef = [{ A: 1 }, { b: 56 }];
    const expected = [
      {
        author: 'butter_bridge',
        article_id: 'A',
        created_at: 1511354163389
      },
      {
        author: 'brandy_scotsh',
        article_id: 'b',
        created_at: 1811454168319
      }
    ];
    const actual = formatComments(comments, articleRef);
    
    expect(actual).to.eql(expected);
  });
  it('make sure i `am not mutating data ', () => {
    const comments = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: 'butter_bridge',
        votes: 16,
        created_at: 1511354163389
      },
      {
        body: 'blablablablablablablbalbalabakfugeugd',
        belongs_to: "They're not exactly people, are they?",
        created_by: 'brandy_scotsh',
        votes: 1200,
        created_at: 1811454168319
      }
    ];
    const articleRef = [{ A: 1 }, { b: 56 }];
   const actual = formatComments(comments, articleRef);
   
   expect().to.not.equal(actual)
  });
});
