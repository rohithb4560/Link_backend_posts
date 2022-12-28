const { post} = require("../index");


module.exports.createpost=body=> {
  return post.create(body);
}

module.exports.deletepost= filterQuery=> {
  return post.findByIdAndDelete(filterQuery);
}

module.exports.getpost = filterQuery=>{
    return post.findOne(filterQuery)
}

module.exports.getAllposts =(filterQuery)=>{
    return post.find(filterQuery)
}
