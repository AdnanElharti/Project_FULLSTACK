import emailjs from "emailjs-com";
import React,{Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
 class ContactForm extends Component {
    constructor(props){
        super(props)
      this.state={
        show : false
      }
        this.sendEmail=this.sendEmail.bind(this)
    }
   
    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_zi5w7va', e.target, 'user_OdbFvDa8bmvnDaa28Ipxr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        this.show()
    }
    show(){
        this.setState({show: true})
    }
    hide(){
         this.setState({show: false})

    }

    render (){
        {console.log(this.props.user)}

        var nom="khalid Nafil"
        if(this.props.user!="admin"){
            nom= this.props.nomP+" "+ this.props.prenomP
             }
        return (
                
                <div className="container">
            <Modal show={this.state.show} onHide={()=>{this.hide()}}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                Votre message a été envoyé avec succés.

              </Modal.Body>
              <Modal.Footer>
                {console.log(this.props.user)}
                <Link class="btn btn-primary" to={"/listEtudiant/1/"+this.props.user}>
                  Retour
                </Link>
              </Modal.Footer>
            </Modal>
                <form onSubmit={this.sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" value= {nom} name="name"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" value={this.props.mail} name="mail"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Sujet" name="subject"/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Votre message" name="message"></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="envoyer"></input>
                            </div>
                        </div>
                    </form>
                </div>
            
        )
    }
}
export default ContactForm;