const express=require('express')
const router=express.Router()
const Article=require('../models/articleModel')

//request getall article
router.get('/',(req,res)=>{
    Article.find()
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Find Error server ${err}`))
})


//request add new article
router.post('/add',(req,res)=>{
    const article =new Article({
        title:req.body.title,
        article:req.body.article,
        authorname:req.body.authorname
    })
   
    article.save()
    .then(()=>res.json('Post Successfull'))
    .catch(err=>res.status(400).json(`Post Error server ${err}`))
})

//request find article by id
router.get('/:id',(req,res)=>{
    Article.findById(req.params.id)
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`find Error server ${err}`))
})


//request update article
router.put('/update/:id',(req,res)=>{
    
    Article.findByIdAndUpdate(req.params.id,{$set:req.body})
   .then(()=>res.json('Update successfull'))
   .catch(err=>res.status(400).json(`find Error server ${err}`))
})


//request delete article
router.delete('/delete/:id',(req,res)=>{

    Article.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Article Deleted'))
    .catch(err=>res.status(400).json(`find Error server `))
})



module.exports=router