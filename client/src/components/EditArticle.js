import React,{Fragment,useState,useEffect} from 'react'
import axios from 'axios'

 const EditArticle = (props) => {
  const [title,setTitle]=useState('')
  const [article,setArticle]=useState('')
  const [authorname,setAuthorName]=useState('')
  const [message,setMessage]=useState('')

const onSubmit=e=>{
    e.preventDefault();
     const articles={
         title,article,authorname
     };

     setTitle("");
     setArticle("");
     setAuthorName("")
     axios.put(`/articles/update/${props.match.params.id}`,articles)
     .then(res=>
        setMessage(res.data))
     .catch(error=>{
         console.log(error)
     })
}
// const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})


useEffect(() => {
  axios.get(`/articles/${props.match.params.id}`)
  .then(res=>[
  
      setTitle(res.data.title),
      setArticle(res.data.article),
      setAuthorName(res.data.authorname)
  ])
     
      .catch(err=>{
          console.log(err)
      })

}, [])
    return <Fragment>
<div className="container bg-white">
<div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-6">Update Article</h1>
<span className="text-danger">{message}</span>
          <form onSubmit={e=>onSubmit(e)} encType="multipart/form-data">
           
            <div className="form-group">
              <label htmlFor="authorname"> Author Name: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Author Name"
                name="authorname"
                value={authorname}
                onChange={e=> setAuthorName(e.target.value)}
                required
              
                
               
              />
             
            </div>
            <div className="form-group">
              <label htmlFor="title"> Title: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={title}
                onChange={e=> setTitle(e.target.value)}
                required
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="article"> Article: </label>
              <textarea
                type="text"
                rows="3"
                className="form-control"
                placeholder="Enter The Article"
                name="article"
                value={article}
                onChange={e=> setArticle(e.target.value)}
                required>
                </textarea>
            </div>

            
            
            
            
            
            <button className="btn btn-primary my-3 d-block">Update Article</button>
          </form>
        </div>
      </div>
      </div>

    </Fragment>
}

export default EditArticle