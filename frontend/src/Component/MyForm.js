import React, { Component } from 'react';
import './MyForm.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Form2 from "../Component/Form2"
import { event } from 'jquery';
class MyForm extends Component {
  
  constructor(props) {
      super(props);

      console.log(this.props.user)
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
      }

      )

      

      
      


      this.state={
        Eb:"",
        Ed:"",
        El:"",
        F1a:"",
        F2a:"",
        F3a:"",
        Fb:"",
        Nb:0,
        S1:0,
        S2:0,
        S3:0,
        S4:0,
        S5:0,
        S6:0,
        TypeL:"",
        TypeD:"",
        //////
        cursus:{},
        etudiant:{},
        p:"",
        nom:"",
        id:"",


      }
      
    
    }

    chargerEb= event =>{
      this.setState({
          Eb : event.target.value
      })
    }

    chargerEd= event =>{
      this.setState({
          Ed : event.target.value
      })
    }

    chargerEl= event =>{
      this.setState({
          El : event.target.value
      })
    }

    chargerF1a= event =>{
      this.setState({
        F1a : event.target.value
      })
    }

    chargerF2a= event =>{
      this.setState({
        F2a : event.target.value
      })
    }

    chargerF3a= event =>{
      this.setState({
        F3a : event.target.value
      })
    }

    chargerNb= event =>{
      this.setState({
        Nb : event.target.value
      })
    }

    
    chargerFb= event =>{
      this.setState({
        Fb : event.target.value
      })
    }

    chargerS1= event =>{
      this.setState({
        S1 : event.target.value
      })
    }

    chargerS2= event =>{
      this.setState({
        S2 : event.target.value
      })
    }

    chargerS3= event =>{
      this.setState({
        S3 : event.target.value
      })
    }

    chargerS4= event =>{
      this.setState({
        S4 : event.target.value
      })
    }

    chargerS5= event =>{
      this.setState({
        S5 : event.target.value
      })
    }
    chargerS6= event =>{
      this.setState({
        S6 : event.target.value
      })
    }

    chargerTypeL= event =>{
      this.setState({
        TypeL : event.target.value
      })
    }


    chargerTypeD= event =>{
      this.setState({
        TypeD : event.target.value
      })
    }

    chargerId= event =>{
      this.setState({
          id: event.target.value
      })
      
    
      
         
  }
  /*MyForm= ()=>{
    axios.get("http://localhost:4000/api/etudiants").then((res)=>{
            this.setState({ etudiants : res.data});
            this.state.etudiants.map(etudiants =>{if(etudiants.id==this.state.id){
                
            }
        })
        }) 
  }*/

  m (){
    axios.get(this.state.etudiant._links.cursus.href).then(res=>{
      axios.patch
        (res.data._links.self.href,
          {
            etablissementBac:this.state.Eb,
            etablissementDeugDut:this.state.Ed,
            etablissementLicense:this.state.El,
            filier1ereAnnee:this.state.F1a,
            filier2emeAnnee:this.state.F2a,
            filier3emeAnnee:this.state.F3a,
            filiereBac:this.state.Fb,
            noteBac:this.state.Nb,
            noteS1:this.state.S1,
            noteS2:this.state.S2,
            noteS3:this.state.S3,
            noteS4:this.state.S4,
            noteS5:this.state.S5,
            noteS6:this.state.S6,
            typedipdeug:this.state.TypeD,
            typelicence:this.state.TypeL,
  
            ////
           
        } ).then(res=>{
             window.location.reload(false)
        })
      
        
    })
    }

  
  

  render() {
    console.log(1)
   // var url =this.state.etudiant._links.self.href
//var id = url.replace("http://localhost:4000/api/etudiants","")
      return (
        <div className="wrapper">
          <div class="form-style-8">
            <h2>Renseigner vos informations</h2>
            <h4>Bienvenue {this.state.etudiant.prenom +" "+this.state.etudiant.nom }</h4>
            <br></br>
            <form>

              <br/>
              <input type="text"  placeholder="Etablissement du Baccalaureat" onChange={this.chargerEb}/>
              <input type="text"  placeholder="Etablissement deug/deust" onChange={this.chargerEd}/>
              <input type="text"  placeholder="Etablissement Licence" onChange={this.chargerEl}/>
              <input type="text"  placeholder="Filière de la première année" onChange={this.chargerF1a}/>
              <input type="text"  placeholder="Filière de la deuxième année" onChange={this.chargerF2a}/>
              <input type="text"   placeholder="Filière de la troisième année" onChange={this.chargerF3a}/>
              <input type="text"   placeholder="Filière du bac" onChange={this.chargerFb}/>
              <input type="text"   placeholder="note du bac" onChange={this.chargerNb}/>

              <input type="text"   placeholder="Moyenne du s1" onChange={this.chargerS1}/>
              <input type="text"   placeholder="Moyenne du s2" onChange={this.chargerS2}/>
              <input type="text"   placeholder="Moyenne du s3" onChange={this.chargerS3}/>
              <input type="text"   placeholder="Moyenne du s4" onChange={this.chargerS4}/>
              <input type="text"   placeholder="Moyenne du s5" onChange={this.chargerS5}/>
              <input type="text"   placeholder="Moyenne du s6" onChange={this.chargerS6} />
              <input type="text"   placeholder="Type du deug" onChange={this.chargerTypeD}/>
              <input type="text"   placeholder="type de la license" onChange={this.chargerTypeL} />
              <br/>
              <Link to={'/Form2'+this.state.id} className=" btn btn-primary" onClick={this.m.bind(this)}> Valider</Link>
            </form>
          </div>
        </div>
      );
  }
}

export default MyForm;
