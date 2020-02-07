import React,{Fragment,useState} from 'react'

import axios from 'axios'
 const AddArticle = () => {
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
     axios.post('/articles/add',articles)
     .then(res=>
      setMessage(res.data))
     .catch(error=>{
         console.log(error)
     })
}


    return <Fragment>
<div className="container">
<div className="row  bg-white">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-6">Add Article</h1>
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

            
            
            
            
            
            <button className="btn btn-primary my-3 d-block">Post Article</button>
          </form>
        </div>
      </div>
      </div>
    </Fragment>
}

export default AddArticle