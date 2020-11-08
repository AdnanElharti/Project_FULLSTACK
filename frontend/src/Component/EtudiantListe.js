import React, { Component, PropTypes} from 'react';
import ListEtudiant from './ListEtudiant'
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

import NavBar from './NavBar';
import Trombinoscope from './Trombinoscope';
import InfoEtudiant from "./InfoEtudiant";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class EtudiantListe extends Component {

    

    constructor(props) {
        super(props);
        if(this.props.user!="admin"){
            axios.get("http://localhost:4000/api/professeurs/"+this.props.user).then(res=>{
                console.log(res.data)
               this.setState(
                {matiere:res.data.matiere,
                nomP:res.data.nom,
                prenomP:res.data.prenom
            })
            })
        }
        else{
            axios.get("http://localhost:4000/api/coordinateurs/1").then(res=>{
                console.log(res.data)
               this.setState(
                {
                nomP:res.data.nom,
                prenomP:res.data.prenom
            })
            })
        }
        this.loadStudent();
        this.state = {
        matiere:"",
        students: [],
        selectedId: "",
        promo: 1,
        selectedStudent: {},
        cursus :{},
        b:false,
        show : false,
        mail:null,
        mdp:null,
        nom:null,
        prenom:null,
        temp:{},
        cursusL:"",
        nomP:"",
        prenomP:"",
        Tel:"",
        showA:false

    	}
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...this.state,
            promo: nextProps.promo,

        })
    }

    chargerMail= event =>{
        this.setState({
            mail : event.target.value
        })
    }
    chargerMdp= event =>{
        this.setState({
            mdp: event.target.value
        })
    }
    chargerNom = event => {
        this.setState({
            nom: event.target.value
        })
    }
    chargerPrenom = event =>{
        this.setState({ prenom: event.target.value})
    }
    chargerTel=event=>{
        this.setState({
            Tel:event.target.value
        })
    }
    ajouterEtudiant = event => {
        
        this.state.students.map(p=>{if(p.mail==this.state.mail){this.setState({showA:true,show:false})}
        })
        axios.get("http://localhost:4000/api/professeurs").then(res=>{
            res.data._embedded.professeurs.map(e=>{
                if(e.mail==this.state.mail){
                    this.setState({showA:true,show:false})
                }
            })
            if(this.state.showA!=true){
                const cursus= {}    
                axios.post("http://localhost:4000/api/cursuses",cursus).then(res => {
                   this.setState({cursusL: res.data._links.self.href})
                   console.log(res.data._links.self.href)
                   
                }).then(()=>{const etudiant = {     
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    mail: this.state.mail,
                    mdp: this.state.mdp,
                    tel: this.state.Tel,
                    photo: "indispo.png",
                    promotion: 1,
                    cursus:this.state.cursusL,
                    devellopement:"moyen",
                    baseDonnées:"moyen",
                    langue:"moyen",
                    mathematique:"moyen",
                    serieux:0,
                    egoiste:0,
                    ambitieux:0,
                    social:0
        
                    
                }
                axios.post("http://localhost:4000/api/etudiants",etudiant).then(res => {
                    console.log(res.data);
                    window.location.reload(false);
                })})
            }
            
        })
       
        

    }
    loadStudent = () => {

       
        axios.get("http://localhost:4000/api/etudiants")
            .then(res => {
                this.setState({
                    ...this.state,
                    students: res.data._embedded.etudiants
                })
              
               
            })
            .catch(error => {
                console.log(error);
            })

    }
  
    render() {
        let active = this.props.user=="admin"?"visible":"hidden"
        return (
            
            
            <div class="adnan container-fluid">
                <NavBar user={this.props.user}/>
            <div class="float-right">
                <button type="button" style={{marginBottom:20, marginTop:20,marginRight:50, visibility:active}} class={"btn btn-primary"} onClick={()=> {this.show()}}>Ajouter étudiant</button>  
            </div>
      
              <Modal show={this.state.show} onHide={()=>{this.hide()}}>
              <Modal.Header closeButton>
                <Modal.Title>Ajouter étudiant</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                
                <Form.Group controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Nom" onChange={this.chargerNom} />
                  </Form.Group>
                  <Form.Group controlId="prenom">
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control type="text" placeholder="Prenom" onChange={this.chargerPrenom}/>
                  
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder=" Addresse mail" onChange={this.chargerMail} />
                  
                </Form.Group>
                <Form.Group controlId="tel">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="text" placeholder="Telephone" onChange={this.chargerTel}/>
                  
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" onChange={this.chargerMdp} />
                </Form.Group>
                
                
                </Form>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={()=>{this.hide()}} >
                  Annuler
                </Button>
                <Button variant="primary" onClick={this.ajouterEtudiant}>
                  Ajouter
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.showA} onHide={()=>{this.hideA()}}>
                <Modal.Header closeButton>
                    <Modal.Title>Erreur</Modal.Title>   
                </Modal.Header>
                <Modal.Body>
                    <Form.Text className="text-muted text-danger">
                        email déja existant, essayez un autre 
                    </Form.Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{this.hideA()}} >
                        Okay
                    </Button>
                    
                </Modal.Footer>
            </Modal>
                <div className="row  m-4 p-4">
                    <div className="col-6">
                        <ListEtudiant selected={this.state.selectedId} students={this.state.students}
                                      onClickStudent={this.showStudentInfo} promo={this.state.promo} user={this.props.user} nomP={this.state.nomP} prenomP={this.state.prenomP}/>
                      </div>
                    <div className="col-6  ">
                        <InfoEtudiant etudiant={this.state.selectedStudent} cursus ={this.state.cursus} b = {this.state.b} user={this.props.user} matiere={this.state.matiere} ></InfoEtudiant>
                    </div>
            </div>
            
            </div>
        );
    }


    showStudentInfo = (etudiant) => {
        axios.get(etudiant._links.cursus.href).then(res => { 
            this.setState({
                ...this.state,
                selectedId: etudiant._links.self.href,
                selectedStudent: etudiant,
                cursus : res.data,
                b:true
            })
        })
    }
    show(){
        this.setState({show: true})
    }
    hide(){
         this.setState({show: false})

    }
    hideA(){
        this.setState({showA: false})

   }
   
      
      
}


export default EtudiantListe;