import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

 const Article = (props) => {
    const [title,setTitle]=useState('')
    const [article,setArticle]=useState('')
    const [authorname,setAuthorName]=useState('')
    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res=>[
            console.log(res.data),
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
           
            .catch(err=>{
                console.log(err)
            })
    
    }, [props])
    return (
    <div className="container">
    <div className="card">
    <div className="card-header">
   
    
    <h2>{title}</h2>

    </div>
    <div class="card-body">
  

<Moment><p className="p-4">{article.time}</p></Moment>
  
    <blockquote class="blockquote mb-0">
    <p className="text-justify">{article}</p>
    <footer className="badge blockquote-footer"> <cite title="Source Title">{authorname}</cite></footer>
    {/* <span className='badge badge-secondary p-2'></span> */}
    </blockquote>
  
   </div>
</div>
</div>
    )
}
export default Article;