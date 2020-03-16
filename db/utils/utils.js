exports.formatDates = list => {
  if (list[0] == undefined) return [];
  const newlist = [];
  const maping = list.map(listobj => {
    const newobj = { ...listobj };

    newlist.push(newobj);
  });
  for (let i = 0; i < newlist.length; i++) {
    newlist[i].currentTime = new Date().getDate();
  }

  console.log(newlist);
  return newlist;
};
exports.makeRefObj = list => {
  const newlist = [...list];
  for (let i = 0; i < newlist.length; i++) {
    newlist[i] = { ...newlist[i] };
  }
  const newnewlist = [];
  for (let b = 0; b < newlist.length; b++) {
    if (newlist[b].title) {
      if (newlist[b].article_id) {
        const titles = newlist[b].title;
        const articles = newlist[b].article_id;
        let object = {};
        object[titles] = articles;
        newnewlist.push(object);
      }
    }
  }
  if (newnewlist.length !== 0) {
    return newnewlist;
  }

  return newlist;
};
exports.formatComments = (comments, articleRef) => {
  const array = [];
  const article = [...articleRef];
  const comment = [...comments];
  
  for (let i = 0; i < article.length; i++) {
    let object = {};
    const id = Object.keys(article[i])[0];

    const commentName = comment[i].created_by;
const createdDate = comment[i].created_at;
    object.author = commentName;

    object.article_id = id;
    object.created_at =createdDate;

    array.push(object);
  }
  return array;
};
