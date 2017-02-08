import React, { Component } from 'react';
import { Link } from 'react-router';
import Collection from './collection';
import Footer from './Footer';
import Header from './Header';
import './App.css';


// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.
class App extends Component {
	constructor() {
		// In a constructor, call `super` first if the className extends another classNameName
		super();
	}

 handleSearch(ev){
    var search=document.getElementById('search-bar').value;
    console.log(search);
    var search1=JSON.stringify({
    	"search1":search
    })
   	fetch("http://localhost:9000/search_restaurants_by_name_area?area="+search1,
   	{

 		headers :{
          "Content-Type" : "application/json"
        }
   	})
            .then(function (data) {
 	console.log('Added into the database',data);
  })
            
 }


	// `render` is called whenever the component's props OR state are updated.
	render() {
		// console.log('The App component was rendered')
  return (
	 <div>
	 	<Header />

    <div id="tf-home" className="text-center">
        <div className="overlay">
            <div className="content">
                <div className="txt">
				 		       <div className="input-group">
								       <input type="text" size ="100" placeholder="Hungry??  Find your favourite Bistro...." className="form-control" id="search-bar"/> 
									        <span className="input-group-btn">
									        <button className="btn btn-warning" onClick={this.handleSearch}>
									        <i className="fa fa-search"></i></button>
                          </span>
 						       </div>
				        </div>
                <a href="#tf-collection" className="fa fa-angle-down page-scroll"></a>
            </div>
        </div>
    </div>
    <Collection />
    <div className="text-center"><a href="#tf-home" className="fa fa-angle-up fa-3x"></a></div>
		<Footer />
		</div>

		);
		
	 }
 }

export default App;