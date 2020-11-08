import React, { Component } from 'react';
import './cardCss.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Trombinoscope from './Trombinoscope';

class Card extends Component{
    render(){
    return (
        <div className =" taha card text-center">
            
            <div className ="overflow">
              <img src ={this.props.img} alt="" className="card-img-top" style={{width:300,height: 250}}></img>
            </div>
            <div className=" tahaB card-body text-dark">
            <h4 className=" tahaT card-title"> {this.props.text}</h4>
            {
                <Link to ={this.props.link+"/"+this.props.user}  className=" btn btn-outline-success"> Cliquez içi</Link>
                
            }  
            
            </div>
        </div>
      
      );    
    
    }
}
  export default Card;