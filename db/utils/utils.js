exports.formatDates = list => {

  if (list[0] == undefined) return [];
const newlist = [];
const maping = list.map(listobj =>{

const newobj = {...listobj}

newlist.push(newobj)

})
newlist[0].currentTime = new Date();

 console.log(newlist)
return newlist;

};
exports.makeRefObj = list => {};

exports.formatComments = (comments, articleRef) => {};
