import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";
export default class NavEtud extends React.Component {
	render() {
    	return (	
        	<Navbar class="navbar navbar-inverse" bg="dark" variant="dark" >
            	
				<Link to={"/Form2/"+this.props.user} className="navbar-brand">
                	<img src={require("./home.png")} width="40" height="40" /> 
            	</Link>
                <Link to={"/Form2/"+this.props.user} className="nav-link"> Profil</Link>

				<Link to={"/listeProfE/"+this.props.user} className="nav-link"> Liste de professeurs</Link>

				<Navbar.Collapse className="justify-content-end">
				<Link to ={"/"} class="nav navbar-nav "> Deconnexion </Link>
				</Navbar.Collapse>
				

        	</Navbar>
    	);
	}
}
