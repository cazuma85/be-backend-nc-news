const {fetchTopics}= require("../models/topic.modles")
 const getTopics = (req , res , next )=>{
fetchTopics().then(topics =>{
res.send({topics })

})
.catch(next)
  //console.log(err)module.exports = errors;
  

 }
module.exports = {getTopics };