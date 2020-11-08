import React, { Component } from 'react';
import MyForm from "../Component/MyForm";
import './Form2.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavEtud from './NavEtud'

class Affichage extends Component {
    constructor(props) {
        super(props);
        axios.get("http://localhost:4000/api/etudiants/"+this.props.user).then(res=>{
            console.log(res.data)
            var url =res.data._links.self.href
            this.setState(
                {
                    etudiant:res.data,
                    id : url.replace("http://localhost:4000/api/etudiants",""),
                    //n:res.data.Nom,
                    //p:res.data.Prenom,
                }
                )
                axios.get(res.data._links.cursus.href).then(resC=>{
                   
                    this.setState(
                        {
                            cursus:resC.data,
                        }
                        )

                })
        })
      

        this.state={
            id:"",
            etudiant:{},
            cursus:{},

        }
       

    }

    retour (){
        var url =this.res.data._links.self.href
        var id = url.replace("http://localhost:4000/api/etudiants","")
        this.props.history.push('/MyForm/'+id)
    }
    chargerId= event =>{
        this.setState({
            id: event.target.value
        })
    }

    render(){
        return (
            <div className="wrapper">
            <NavEtud user={this.props.user} />
              <div class="form-style-8">
                <h2>Profil</h2>
                <br></br>
                <form>
    
                  <label type="file" id="myFile" name="filename"><b>Nom : &thinsp;&thinsp;&emsp; &emsp;&emsp; &emsp; &emsp; &emsp;&thinsp;&thinsp;&thinsp;&thinsp; &emsp; &emsp;</b> {this.state.etudiant.nom} </label><br/>
                  <label type="text" ><b>Prénom  :&emsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;</b>{this.state.etudiant.prenom}</label><br/>
                  <label type="text" ><b>Etablissement  du bac  :</b>&emsp;&emsp;&emsp;&thinsp;{this.state.cursus.etablissementBac}</label><br/>
                  <label type="text" ><b>Etablissement deug/deust  :</b>&emsp;{this.state.cursus.etablissementDeugDut}</label><br/>
                  <label type="text" ><b>Etablissement de license  :</b>&thinsp;&thinsp;&emsp;{this.state.cursus.etablissementLicense}</label><br/>
                  <label type="text" ><b>Filière de la 1ere année  :</b>&emsp;&emsp;&thinsp;{this.state.cursus.filier1ereAnnee}</label><br/>
                  <label type="text" ><b>Filière de la 2ere année  :</b>&emsp;&emsp;&thinsp;{this.state.cursus.filier2emeAnnee}</label><br/>
                  <label type="text" ><b>Filière de la 3ere année  :</b>&emsp;&emsp;&thinsp;{this.state.cursus.filier3emeAnnee}</label><br/>
                  <label type="text" ><b>Filière du bac  :</b>&emsp;&emsp;&thinsp;&emsp;&emsp;&thinsp;&emsp;&thinsp;&emsp;&thinsp;{this.state.cursus.filiereBac}</label><br/>
                  <label type="text" ><b>Moyenne du bac  :</b>&emsp;&emsp;&thinsp;&emsp;&emsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;{this.state.cursus.noteBac}</label><br/>
                  <label type="text" ><b>Note s1  :</b></label>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{this.state.cursus.noteS1}<br/>
                  <label type="text" ><b>Note s2 :</b></label>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{this.state.cursus.noteS2}<br/>
                  <label type="text" ><b>Note s3</b> :</label>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{this.state.cursus.noteS3}<br/>
                  <label type="text" ><b>Note s4 :</b></label>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{this.state.cursus.noteS4}<br/>
                  <label type="text" ><b>Note s5 :</b></label>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{this.state.cursus.noteS5}<br/>
                  <label type="text" ><b>Note s6 :</b></label>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{this.state.cursus.noteS6}<br/>
                  <label type="text" ><b>Type du deug :</b>&emsp;&emsp;&emsp;&thinsp;&emsp;&emsp;&emsp;&thinsp;{this.state.cursus.typedipdeug}</label><br/>
                  <label type="text" ><b>Type de license :</b>&emsp;&emsp;&emsp;&thinsp;&thinsp;&emsp;&emsp;{this.state.cursus.typelicence}</label><br/>

                    <br/><br/><br/>




                </form>
              </div>
            </div>
          );
        
    }
}
export default Affichage;