import React,{useState} from 'react'
import spinner from "../layout/spinner.gif"
import {Link} from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment'

const Article=({posts})=> {

    const [article,setArticle]=useState([])
    //delete by id

    const deleteArticle=id=>{
        console.log(id)
     axios.delete(`/articles/delete/${id}`)

        .then(res=>alert(res.data))

            setArticle(article.filter(elem=>elem._id !== id))
          
            
}

    return (
        <div className='container p-3'>
        
                    {
                    // !posts.length ? (
                    // <img src={spinner} alt="loading..."/> 
                    // ): (
                    posts.map((article,key)=>(
                         <div className="card" key={key}>
                             <div className="card-header">
                             <Link to={{
                                 pathname:`/article/${article._id}`
                             }}>
                             
                             <h2>{article.title}</h2>
                             </Link>
                             </div>
                             <div className="card-body">
                           
        
            <Moment><p className="p-4">{article.time}</p></Moment>
                           
                             <blockquote className="blockquote mb-0">
                             <p className="text-justify">{article.article}</p>
                             <footer className="badge blockquote-footer"> <cite title="Source Title">{article.authorname}</cite></footer>
                             {/* <span className='badge badge-secondary p-2'></span> */}
                             </blockquote>
                             <div className='row my-5'>
                                <div className='col-sm-2 '>
                                    <Link to={`update/${article._id}`} className='btn btn-outline-success'>
                                        Edit Article
                                    </Link>
                                </div>
                                <div className='col-sm-2'>
                                    <button
                                    onClick={()=>deleteArticle(article._id)} className='btn btn-outline-danger'>
                                        Delete Article
                                    </button>
                                </div>
                            </div> 
                            </div>
                    </div>
                
                    ))
                  }

      </div>
    )
}

export default Article
