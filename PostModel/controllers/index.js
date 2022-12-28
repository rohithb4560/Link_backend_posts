var express = require('express');
var mongoose = require('mongoose');
const router = require('router')
const post = require('../index')
const {createpost,deletepost,getpost,getAllposts} = require('../Methods/index')

module.exports.createpost = async (req,res)=>{
    const data =await createpost(req.body)
  
    res.send(data)
}

module.exports.deletepost  = async (request,response)=>{
    const data = await deletepost({...request.body});
    response.send(data);
}

module.exports.getpost = async (req,res)=>{
    const data = await getpost(req.body)
    res.send(data)
}
module.exports.getAllposts = async (req,res)=>{
    const data = await getAllposts(req.body)
    res.send(data)
}

