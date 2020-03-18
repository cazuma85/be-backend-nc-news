const connection = require("../db/connection")

exports.fetchTopics = ()=> {
return connection .select("*").from("topics").then(result=>{
//console.log(result.data);
return result ;
})

}