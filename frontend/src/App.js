import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import NavBar from './Component/NavBar';
import Trombinoscope from './Component/Trombinoscope';
import EtudiantListe from './Component/EtudiantListe';
import Main from "./Component/main"
import ContactForm from './Component/ContactForm';
import Authentification from './Component/Authentification'
import ListProfesseur from './Component/ListProfesseur'
import MyForm from "./Component/MyForm"
import Affichage from "./Component/Form2"
import ListProfE from './Component/ListProfE'
class App extends Component {
  render(){
  return (
	
	
	<Router>
	
		<Switch>
			<Route path="/listEtudiant/:id/:user" exact component={(props) => <EtudiantListe promo={props.match.params.id} user={props.match.params.user}/>}/>
			<Route path="/Trombinoscope/:id/:user" exact component={(props)=> <Trombinoscope promo ={props.match.params.id} user ={props.match.params.user}/>}/>
			<Route path="/ContactUs/:user/:nom/:prenom/:mail" exact component={(props)=> <ContactForm user={props.match.params.user} mail={props.match.params.mail} nomP={props.match.params.nom} prenomP={props.match.params.prenom}/>}/>
			<Route path="/" exact component={Authentification}></Route>
			<Route path="/main/:user" exact component={(props)=><Main user={props.match.params.user}/>}></Route>
			<Route path="/listeProf/:user" exact component={(props)=><ListProfesseur user={props.match.params.user}/>}></Route>
			<Route path="/listeProfE/:user" exact component={(props)=><ListProfE user={props.match.params.user}/>}></Route>

			<Route path="/MyForm/:user" exact component={(props)=><MyForm user={props.match.params.user}/>}></Route>
			<Route path="/Form2/:user" exact component={(props)=><Affichage user={props.match.params.user}/>}></Route>


		</Switch>
	

		</Router>
	

 		);
  }
}
export default App;
