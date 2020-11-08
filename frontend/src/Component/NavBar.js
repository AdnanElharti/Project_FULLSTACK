import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";
export default class Navigationbar extends React.Component {
	render() {
    	return (	
        	<Navbar class="navbar navbar-inverse" bg="dark" variant="dark" >
            	
				<Link to={""} className="navbar-brand">
                	<img src={require("./home.png")} width="40" height="40" /> 
            	</Link>
            	
				<NavDropdown title="Liste des étudiants" id="basic-nav-dropdown">

					<Link to={"/listEtudiant/1/"+this.props.user} className="nav-link" > Promotion 1 </Link>
					<Link to={"/listEtudiant/2/"+this.props.user} className="nav-link"> Promotion 2 </Link>
				
				</NavDropdown>
				<NavDropdown title="Trombinoscope" id="basic-nav-dropdown">

					<Link to={"/Trombinoscope/1/"+this.props.user} className="nav-link" > Promotion 1 </Link>
					<Link to={"/Trombinoscope/2/"+this.props.user} className="nav-link"> Promotion 2 </Link>
				</NavDropdown>
				<Link to={"/listeProf/"+this.props.user}> Liste de professeurs</Link>

				<Navbar.Collapse className="justify-content-end">
				<Link to ={"/"} class="nav navbar-nav "> Deconnexion </Link>
				</Navbar.Collapse>
				

        	</Navbar>
    	);
	}
}
