import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Articles from './components/layout/Article'
import Article from './components/Article'
import AddArticle from './components/AddArticle'
import EditArticl from './components/EditArticle'



function App() {
 
  return (
    <div className="App">
    <Header/>
    <Navbar/>
      <Switch>
          <Route exact path="/" component={Articles}/>
          {/* <Route exact path="/article/:id" component={Article}/>
          <Route exact path="/update/:id" component={EditArticl}/>
          <Route path="/add-article" component={AddArticle}/> */}
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
