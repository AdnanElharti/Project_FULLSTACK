import React, {Component} from "react";
import axios from "axios";
import NavEtud from "./NavEtud";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListEtudiant from "./ListEtudiant";
import InfoEtudiant from "./InfoEtudiant";
import {Link} from 'react-router-dom';



export default class ListProfE extends Component {

    state = {
        profs: [],
        user:{},
        show:false,
        showS:false,
        showU:false,
        mail:"",
        mdp:"",
        nom:"",
        prenom:"",
        matiere:"",
        prof:"",
        profN:"",
        profP:"",
        Tel:""

    }

    constructor(props) {
        super(props);
        if(this.props.user!="admin"){
            axios.get("http://localhost:4000/api/professeurs/"+this.props.user).then(res=> {
                this.setState({
                    user:res.data
                })
            })
        }
        else{
            axios.get("http://localhost:4000/api/coordinateurs/1").then(res=>{
                this.setState({
                    user:res.data
                })
            })
        }
        this.loadTeacher()
    }
    supprimer(Url){
        
        axios.delete(Url).then(()=>{
            window.location.reload(false)
             })
        
    } 
    ajouterProf = event => {
        const prof= {
            mail:this.state.mail,
            mdp:this.state.mdp,
            nom:this.state.nom,
            prenom:this.state.prenom,
            matiere:this.state.matiere,
            tel:this.state.Tel
        } 
        
        axios.post("http://localhost:4000/api/professeurs",prof).then(res=>{
            console.log(res.data)
            window.location.reload(false)}
        )
        
        

    }
    miseajour(Url){
        axios.patch(Url,{mdp:this.state.mdp,matiere:this.state.matiere}).then(()=>{
            window.location.reload(false)
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
    chargerTel=event=>{
        this.setState({
            Tel:event.target.value
        })
    }
    chargerNom = event => {
        this.setState({
            nom: event.target.value
        })
    }
    chargerPrenom = event =>{
        this.setState({ 
            prenom: event.target.value
        })
    }
    chargerMatiere = event =>{
        this.setState({ 
            matiere: event.target.value
        })
    }
    render() {
        let active = this.props.user=="admin"?"visible":"hidden"
        return (
            <div class="adnan container-fluid">
            <NavEtud user={this.props.user}/>
            <div class="float-right">
                <button type="button" style={{marginBottom:20, marginTop:20,marginRight:50,visibility:active}} class={"btn btn-primary"} onClick={()=> {this.show()}}>Ajouter professeur</button>  
            </div>
            <Modal show={this.state.show} onHide={()=>{this.hide()}}>
              <Modal.Header closeButton>
                <Modal.Title>Ajouter professeurs</Modal.Title>
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
                <Form.Group controlId="formBasicMatiere">
                    <Form.Label> matiere </Form.Label><br/>
                    <select class="form-control"  onChange={this.chargerMatiere} >
                        <option > Choissez la matiere .. </option>
                        <option value="base de données">Base de données</option>
                        <option value="devellopement">Devellopement</option>
                        <option value="langue">Langue</option>
                        <option value="mathematique">Mathematique</option>
                    </select>
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
                <Button variant="primary" onClick={()=>{this.ajouterProf()}}>
                  Ajouter
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={this.state.showS} onHide={()=>{this.hideS()}}>
                <Modal.Header closeButton>
                    <Modal.Title>Supprimer étudiant</Modal.Title>   
                </Modal.Header>
                <Modal.Body>
                    <Form.Text className="text-muted">
                       Etes vous sur de supprimer  { this.state.profN } {this.state.profP} de la liste des professeurs?
                    </Form.Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{this.hideS()}} >
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={this.supprimer.bind(this,this.state.prof) }>
                        supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.showU} onHide={()=>{this.hideU()}}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier étudiant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" onChange={this.chargerMdp} />
                        </Form.Group>
                        <Form.Group controlId="formBasicMatiere">
                    <Form.Label> matiere </Form.Label><br/>
                    <select class="form-control"  onChange={this.chargerMatiere} >
                        <option > Choissez la matiere .. </option>
                        <option value="base de données">Base de données</option>
                        <option value="devellopement">Devellopement</option>
                        <option value="langue">Langue</option>
                        <option value="mathematique">Mathematique</option>
                    </select>
                </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{this.hideU()}} > Annuler</Button>
                        <Button variant="primary" onClick={this.miseajour.bind(this,this.state.prof)}>modifier</Button>
                    </Modal.Footer>
            </Modal>
            <div>
        
            <div className="row  m-4 p-4">
                <div className="col-12">
                <h5>Liste des professeurs</h5>
            <table class="table text-center table-striped">
            <thead>
            <tr> <th>Nom et Prenom</th> <th>Mail </th> <th> Tel</th> <th> Matiere</th><th> Actions</th> </tr>
            </thead>
                {this.state.profs.map(prof => {
                        return(

                        <tr>
                            <td>{prof.nom} {prof.prenom}</td>
                            <td>{prof.mail}</td> 
                            <td>{prof.tel}</td>
                            <td>{prof.matiere}</td>
                            <td><Link to={"/ContactUs/"+this.props.user+"/"+this.state.user.prenom+"/"+this.state.user.nom+"/"+prof.mail} className=" btn btn-primary"> Contactez</Link>
                            <button type="button" style={{marginLeft:20, visibility:active }} onClick={()=>{this.showU(prof._links.self.href,prof.nom,prof.prenom)}} class="btn btn-success mr-1">Modifier</button>  
                            <button type="button" style={{marginLeft:20, visibility:active}} onClick={()=>{this.showS(prof._links.self.href,prof.nom,prof.prenom)}} class="btn btn-danger">Supprimer</button>   </td>
                        </tr>
                    )
                })}

            </table>
            </div>
            </div>
        </div>
        </div>);
    }

    loadTeacher = () => {
        axios.get("http://localhost:4000/api/professeurs")
            .then(res => {
                this.setState({
                    profs: res.data._embedded.professeurs
                })
           

            })
            .catch(error => {
                console.log(error);
            })

    }
    show(){
        this.setState({show: true})
    }
    hide(){
         this.setState({show: false})

    }
    showS(Url,nom,prenom){
        this.setState({showS: true,prof:Url,profN:nom,profP:prenom})
    }
    hideS(){
         this.setState({showS: false})

    }
    showU(Url,nom,prenom){
        this.setState({showU: true,prof:Url,profN:nom,profP:prenom})
    }
    hideU(){
         this.setState({showU: false})

    }
}