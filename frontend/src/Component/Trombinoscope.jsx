import React, { Component, PropTypes} from 'react';

import etudiantJs from '../services/etudiantJs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import htmlToImage from 'html-to-image';
import NavBar from './NavBar';

class Trombinoscope extends Component {
    constructor(props){
        super(props)
        this.state ={
            etudiants: []
        }
    }
    componentDidMount(){
        etudiantJs.getEtudiants().then((res)=>{
            this.setState({ etudiants : res.data._embedded.etudiants});

        });
    }
    printDocument() {
        htmlToImage.toJpeg(document.getElementById('Trombino'), { quality: 0.95 , backgroundColor: "white"})
         .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpg';
    link.href = dataUrl;
    link.click();
  }) ;
    }

    render() {
       
        return (
            <div  className="container-fluid">
                <NavBar user={this.props.user}/>
                <div id="Trombino" >
             
                <h2 className ="text-center " style={{marginTop: 20 , marginBottom: 100}}>Trombinoscope</h2>
                <div   className = "row" >
                    
                            { 
                            
                                this.state.etudiants.map(
                                    etudiant =>{
                                        if(etudiant.promotion==this.props.promo){
                                        return ( 
                                        
                                        <div  className="col-md-4 "  >
                                            <center>
                                                
                                                 <img style={{ marginLeft :50}} src = { require("./" +etudiant.photo) } height="150" width="150" />
                                                 <ul style={{listStyleType:" none"}}>
                                                     <li> {etudiant.nom} {etudiant.prenom}</li>
                                                     <li> {etudiant.tel}</li>
                                                     <li> {etudiant.mail}</li>
                                                 </ul>
                                             </center>    
                                            
                                             
                                      </div>);
                                     }
                                    }
                                )
                            
                            
                            }
                     

                    </div>
                    </div>
                   <center> <button type="button"  onClick={this.printDocument} style={{marginBottom:20, marginTop:20}} class="btn btn-info">Telecharger</button> </center>
                    
                    
            </div>
             
            
        );
    }
}

export default Trombinoscope;