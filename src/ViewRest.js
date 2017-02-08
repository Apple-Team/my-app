import React, { Component } from 'react';
import {Link} from 'react-router';
import UpdateRest from './UpdateRest';
import './ViewRest.css';
// webpack.config.js specifies index.js as the entry point, and
// index.js imports and renders this `App` component.

class ViewRest extends Component {
  constructor() {
    // In a constructor, call `super` first if the className extends another className
    super();
    this.state = { 
      data: [],
       bodyVisible: false,
     };
    
        console.log('test');
  }

  componentWillMount(){
     fetch("http://localhost:9000/list_of_all_restaurants")
            .then((response) => response.json())
            .then((responseJson) => {
               this.setState({
                data: responseJson

               });
            });
  }

   handleDelete(id){
   console.log(id);
    fetch('http://localhost:9000/rest/'+id,
      {
        headers :{
          "Content-Type" : "application/json",
          "Accept" : "application/json"
        },
      method: "DELETE"
     })
     .then(function (data) {
  alert('Deleted from the database',id);
  window.location.reload()
  })
  .catch(function (error) {
  alert('Not deleted from the database',error);
  });
 }

 
 handleVisible(){
      this.setState({bodyVisible:false});
    }



  // `render` is called whenever the component's props OR state are updated.
  render() {
    const bodyVisible = this.state.bodyVisible;
   return( // console.log('The App component was rendered')
    <div className="card card-block">{
      this.state.data.map((data, index) => {
            return (
             
 <ul>
  <li className="media">
    <img className="d-flex mr-3" src={data.image} height="100px" width="110px" alt="Generic placeholder image"/>
    <div className="media-body">
      <p className="card-text"><h5 className="mt-0 mb-1">{data.name}</h5>
      Area: {data.area}<br />
      Working Hours: {data.workHours}
      </p>
      </div>
      <button type="button" className="btn btn-warning btn-sm">View Restaurant Page</button>&nbsp;
    <button type="button" className="btn btn-warning btn-sm">Update</button>&nbsp;
    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(data.id)}>Delete</button>

  </li>
</ul>
)})}
</div>
);
   }
 }

export default ViewRest;
