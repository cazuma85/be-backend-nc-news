const {fetchTopics}= require("../models/topic.modles")
 const getTopics = (req , res , next )=>{
fetchTopics().then(topics =>{
res.send({topics })

})
.catch(err =>{
  next(err)
})
 }
module.exports = {getTopics };