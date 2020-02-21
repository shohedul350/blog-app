import React,{useState,useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Articles from './components/layout/Article'
import Article from './components/Article'

import AddArticle from './components/AddArticle'
import EditArticl from './components/EditArticle'

import axios from 'axios'

function App() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    axios.get('/articles')
    .then(res=>setPosts(res.data))
    .catch(error=>console.log(error));
  },[posts])
  return (
    <div className="App">
    <Header/>
    <Navbar/>
      <Switch>
          <Route exact path="/" render={()=><Articles posts={posts}/> }/>
          {/* <Route exact path="/article/:id" render={(props)=><Article{...props} posts={posts}/> }/>
          <Route exact path="/update/:id" render={(props)=><EditArticl{...props} posts={posts}/> }/>
          <Route path="/add-article" component={AddArticle}/> */}
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
