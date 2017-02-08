import React, { Component } from 'react';
import { Link } from 'react-router';


class  StreetFood extends Component {
    constructor() {
    // In a constructor, call `super` first if the classNameNameNameName extends another classNameNameNameName
    super();
    this.state = { data: [] };
        console.log('test');
  }
                         
    componentDidMount(){
     fetch("http://localhost:9000/best_Street_Food_restaurants ")
            .then((response) => response.json())
            .then((responseJson) => {
               this.setState({
                data: responseJson
                 
               });
            });
  }
    
  // `render` is called
  render() {
    // console.log('The App component was rendered')
  return (
      <div>
        <div className="alert alert-warning" role="alert">
           <h2><strong> Street Food</strong></h2>
        </div>
        <div className="card-deck">{
           this.state.data.map(function(data, index) {
            return (
        
            <div className="card card-outline-warning mb-3 text-center" >
                <img className="card-img" src={data.image} alt="Card image cap"/>
                <div className="card-block">
                    <h5 className="card-subtitle">{data.name}</h5>
                    <p className="card-text">{data.cuisine}</p>
                    <p className="card-text">{data.area}</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>)
          })

        }  
            
        </div>
    </div>
    

              


    );
    
   }
 }

export default StreetFood;