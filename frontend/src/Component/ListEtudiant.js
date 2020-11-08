import React, {Component} from "react";
import { Link } from "react-router-dom";


class ListEtudiant extends Component {
    constructor(props) {
        super(props);
           
    }


    render() {
        if(this.props.promo=="1"){
        return <div>
                       
            
            <h5>Liste des étudiants de la première promotion</h5>
            <ul className="list-group">

                {this.props.students.map(student => {
                    if(student.promotion==this.props.promo) {
                        
                        let active = this.props.selected == student._links.self.href ? "active" : "";
                        return <li key={student._links.self.href} className={"list-group-item " + active}
                        onClick={event => this.props.onClickStudent(student)}>{student.nom} {student.prenom}<br/>
                        Mail : {student.mail} <br/> GSM: {student.tel} <br/><Link to={"/ContactUs/"+this.props.user+"/"+this.props.prenomP+"/"+this.props.nomP+"/"+student.mail} className=" btn btn-outline-dark"> Contactez</Link>  </li>
                    }
                })}

            </ul>
        </div>
        }
        else{
            return <div>
                       
            
            <h5>Liste des étudiants deuxième promotion</h5>
            <ul className="list-group">

                {this.props.students.map(student => {
                    if(student.promotion==this.props.promo) {
                        
                        let active = this.props.selected == student._links.self.href ? "active" : "";
                        return <li key={student._links.self.href} className={"list-group-item " + active}
                        onClick={event => this.props.onClickStudent(student)}>{student.nom} {student.prenom}<br/>
                        Mail : {student.mail} <br/> GSM: {student.tel} <br/><Link to={"/ContactUs/"+this.props.user+"/"+this.props.prenomP+"/"+this.props.nomP+"/"+student.mail} className=" btn btn-outline-dark"> Contactez</Link>  </li>
                    }
                })}

            </ul>
        </div>
        }
    }

}


export default ListEtudiant;