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

};
