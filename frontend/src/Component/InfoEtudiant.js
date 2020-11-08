import React, {Component} from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class InfoEtudiant extends Component {
    constructor(props) {
        super(props);
    this.state={

        showS :false,
        ShowU : false,
        mdp:"",
        promo:"",
        L:"",
        M:"",
        D:"",
        B:"",
        change:"",
        ego:0,
        amb:0,
        soc:0,
        eng:0,
        vote:0
    }
   
    this.chargeD =this.chargeD.bind(this)
    this.chargeB =this.chargeB.bind(this)
    this.chargeL = this.chargeL.bind(this)
    this.chargeM = this.chargeM.bind(this)
    this.chargerAmb = this.chargerAmb.bind(this)
    this.chargerSoc = this.chargerSoc.bind(this)
    this.chargerEgo = this.chargerEgo.bind(this)
    this.chargerEng = this.chargerEng.bind(this)
}
componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
        ...this.state,
        
    })
}
  
    chargerPromotion =event =>{
        this.setState({
            promo:event.target.value
        })
    }
    chargerMdp= event =>{
        this.setState({
            mdp: event.target.value
        })
    } 
    showS(){
        this.setState({showS: true})
    }
    hideS(){
         this.setState({showS: false})

    }
    showU(){
        this.setState({showU: true})
    }
    hideU(){
         this.setState({showU: false})

    }
    supprimer(Url,urlC){
        
        axios.delete(Url).then(()=>{
            axios.delete(urlC).then(()=> {
                window.location.reload(false)   
                 })
        })
        
    }
    miseajour(Url){
        axios.patch(Url,{mdp:this.state.mdp}).then(()=>{
            axios.patch(Url,{promotion:this.state.promo}).then(()=>{
                window.location.reload(false)
            })
        })
    }
    chargeB =event=>{
        this.setState({
            B:event.target.value,
            change:"B"
        })    
    }
    chargeD =event=>{
        this.setState({
            D:event.target.value,
            change:"D"

        })    
    }
    chargeL =event=>{
        this.setState({
            L:event.target.value,
            change:"L"

        })    
    }
    chargeM =event=>{
        this.setState({
            M:event.target.value,
            change:"M"

        })    
    }
    chargerEgo=event=>{
            if(event.target.value=="oui"){
                var egoiste = this.props.etudiant.serieux+1
                this.setState({
            ego:egoiste,
            })
        }else{
            this.setState({
                ego:this.props.etudiant.egoiste
            })
        }
        
    }
    chargerEng=event=>{
        if(event.target.value=="oui"){
            var engagé=this.props.etudiant.serieux+1

            this.setState({
        eng:engagé,
        })}else{
            this.setState({
                eng:this.props.etudiant.serieux
            })
        }
        
    }
    chargerSoc=event=>{
        if(event.target.value=="oui"){
            var social=this.props.etudiant.social+1

            this.setState({
        soc:social,
        
        })
    }else{
        this.setState({
            soc:this.props.etudiant.social
        })
    }
  
    }
    chargerAmb=event=>{
        if(event.target.value=="oui"){
            var ambitieux = this.props.etudiant.ambitieux+1

            this.setState({
        amb:ambitieux,
        
        })
    }else{
        this.setState({
            amb:this.props.etudiant.ambitieux
        })
    }
    
    }
    enregistrer(Url){
        
        switch(this.state.change){
            case "B":axios.patch(Url,{baseDonnées:this.state.B,egoiste:this.state.ego,nbVote:this.state.vote,social:this.state.soc,ambitieux:this.state.amb,serieux:this.state.eng}).then(window.location.reload(false)); break;
            case "D":axios.patch(Url,{devellopement:this.state.D,egoiste:this.state.ego,nbVote:this.state.vote,social:this.state.soc,ambitieux:this.state.amb,serieux:this.state.eng}).then(window.location.reload(false));break;
            case "L":axios.patch(Url,{langue:this.state.L,egoiste:this.state.ego,nbVote:this.state.vote,social:this.state.soc,ambitieux:this.state.amb,serieux:this.state.eng}).then(window.location.reload(false));break;
            case "M":axios.patch(Url,{mathematique:this.state.M,nbVote:this.state.vote, egoiste:this.state.ego,social:this.state.soc,ambitieux:this.state.amb,serieux:this.state.eng}).then(window.location.reload(false));break;
            
        }
        console.log(this.state.vote+" "+this.state.ego+" "+this.state.amb+" "+this.state.soc+" "+this.state.eng);
        
        axios.patch(Url,{nbVote:this.props.etudiant.nbVote+1, egoiste:this.state.ego,social:this.state.soc,ambitieux:this.state.amb,serieux:this.state.eng}).then(window.location.reload(false))


    }


    render() {
        console.log(this.state.vote)
        let active = this.props.user=="admin"?"visible":"hidden"
        var dev,bd,langue,math,matiereD=true,matiereB=true,matiereL=true,matiereM=true,selectB=false,selectM=false,selectD=false,selectL=false,clickableDev="visible",clickableBd="visible",clickableLangue="visible",clickableMath="visible",selectDev="hidden",selectBD="hidden",selectLangue="hidden",selectMath="hidden"
        if(this.props.user!="admin"){
           
                switch(this.props.matiere){
                    case "devellopement":clickableDev="hidden";selectDev="visible";matiereD=false;selectD=true;break;
                    case "base de Données":clickableBd="hidden";selectBD="visible";matiereB=false;selectB=true;break;
                    case "langue":clickableLangue="hidden";selectLangue="visible";matiereL=false;selectL=true;break;
                    case "mathematique": clickableMath="hidden";selectMath="visible";matiereM=false;selectM=true;break;
                }
           
        }
       
        
        switch(this.props.etudiant.devellopement){
            case "moyen": dev="warning";break;
            case "bon": dev="success";break;
            case "faible": dev="danger";break;
        }
        switch(this.props.etudiant.baseDonnées){
            case "moyen": bd="warning";break;
            case "bon": bd="success";break;
            case "faible": bd="danger";break;
        }
        switch(this.props.etudiant.langue){
            case "moyen": langue="warning";break;
            case "bon": langue="success";break;
            case "faible": langue="danger";break;
        }
        switch(this.props.etudiant.mathematique){
            case "moyen": math="warning";break;
            case "bon": math="success";break;
            case "faible": math="danger";break;
        }

        return <div>
            { this.props.b &&
                <div className="card">
                    <div className="card-header">
                        {this.props.etudiant.nom} {this.props.etudiant.prenom}
                    </div>
                    <div className="card-body">
                        <b>Cursus : </b>
                        <br/>
                        Etablissement Bacalaureat : {this.props.cursus.etablissementBac}
                        <br/>
                        Etablissement Deug ou Dut : {this.props.cursus.etablissementDeugDut}
                        <br/>
                        Etablissement License : {this.props.cursus.etablissementLicense}
                        <br/>
                        Type de Diplome du 2eme Annee : {this.props.cursus.typedipdeug}
                        <br/>
                        Type de License : {this.props.cursus.typelicence}
                        <br/>
                        Filiere 1ere Annee : {this.props.cursus.filier1ereAnnee}
                        <br/>
                        Filiere 2eme Annee : {this.props.cursus.filier2emeAnnee}
                        <br/>
                        Filiere 3eme Annee : {this.props.cursus.filier3emeAnnee}
                        <br/>
                        Note Bac : {this.props.cursus.noteBac}
                        <br/>
                        Note S1 : {this.props.cursus.noteS1}
                        <br/>
                        Note S2 : {this.props.cursus.noteS2}
                        <br/>
                        Note S3 : {this.props.cursus.noteS3}
                        <br/>
                        Note S4 : {this.props.cursus.noteS4}
                        <br/>
                        Note S5 : {this.props.cursus.noteS5}
                        <br/>
                        Note S6 : {this.props.cursus.noteS6}
                        <br/>
                        <b> Niveau de l'étudiant :</b>
                        <table>
                        <tr>
                        <td> Langue et communication :</td><td>{matiereL &&<div style={{visibility:clickableLangue,width:100}} class={"btn disabled btn-"+langue+" mr-1"}> {this.props.etudiant.langue}</div> } {  selectL &&<select style={{visibility:selectLangue,width:100}} class="form-control"  onChange ={this.chargeL}><option>{this.props.etudiant.langue}</option><option value= "faible">Faible</option><option value="moyen">Moyen</option><option value="bon">Bon</option>   </select>}</td>
                        </tr>
                        <tr> 
                        <td> Devellopement :</td><td>{matiereD &&<div style={{visibility:clickableDev,width:100}} class={"btn disabled btn-"+dev+" mr-1"}>{this.props.etudiant.devellopement}</div>} { selectD && <select style={{visibility:selectDev,width:100}} class="form-control" onChange ={this.chargeD}><option value= {this.props.etudiant.devellopement} >{this.props.etudiant.devellopement}</option><option value= "faible">Faible</option><option value="moyen">Moyen</option><option value="bon">Bon</option>   </select> } </td>
                        </tr>
                        <tr>
                        <td> Base de données : </td><td>{matiereB && <div style={{visibility:clickableBd,width:100}} class={"btn disabled btn-"+bd+" mr-1"}>{this.props.etudiant.baseDonnées}</div>} {  selectB && <select style={{visibility:selectBD,width:100}} class="form-control"  onChange ={this.chargeB}><option>{this.props.etudiant.baseDonnées}</option><option value= "faible">Faible</option><option value="moyen">Moyen</option><option value="bon">Bon</option>    </select> }  </td>
                        </tr>
                        <tr>
                        <td> Mathématique :</td><td>{matiereM &&<div style={{visibility:clickableMath,width:100}} class={"btn disabled btn-"+math+" mr-1"}>{this.props.etudiant.mathematique}</div>} { selectM && <select style={{visibility:selectMath,width:100}}  class="form-control"  onChange ={this.chargeM}><option>{this.props.etudiant.mathematique}</option><option value= "faible">Faible</option><option value="moyen">Moyen</option><option value="bon">Bon</option>    </select> } </td>
                        </tr>
                        </table>
                        <b>Devellopement de personnalité :</b>
                        <table>
                            <tr> 
                                <td>Engagé :</td>
                                <td>
                                    <div class="progress">
                                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow=" 50" aria-valuemin="0" aria-valuemax="100" style={{width: 200*(this.props.etudiant.serieux/this.props.etudiant.nbVote)}}>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                <div class="form-check">
                                    <input class="form-check-input"  type="radio" name="exampleRadios1" id="exampleRadios1O" value="oui" onChange={this.chargerEng} />
                                    <label class="form-check-label" for="exampleRadios1O">
                                        oui
                                    </label>
                                    <input class="form-check-input" style={{marginLeft:10}} type="radio" name="exampleRadios1" id="exampleRadios1N"  onChange={this.chargerEng}  value="non"/>
                                    <label class="form-check-label" style={{marginLeft:25}} for="exampleRadios1N">
                                        non
                                    </label>
                                  </div>
                                </td>
                            </tr>
                            <tr> 
                                <td>Amibitieux :</td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow=" 50" aria-valuemin="0" aria-valuemax="100" style={{width: 200*(this.props.etudiant.ambitieux/this.props.etudiant.nbVote)}}>
                                        </div>
                                    </div>
                                </td> 
                                
                                <td> 
                                <div class="form-check">
                                    <input class="form-check-input"  type="radio" name="exampleRadios2" id="exampleRadios2O" value="oui" onChange={this.chargerAmb} />
                                    <label class="form-check-label" for="exampleRadios2O">
                                        oui
                                    </label>
                                    <input class="form-check-input" style={{marginLeft:10}} type="radio" name="exampleRadios2" id="exampleRadios2N"   onChange={this.chargerAmb} value="non"/>
                                    <label class="form-check-label" style={{marginLeft:25}} for="exampleRadios2N">
                                        non
                                    </label>
                                  </div></td>
                            </tr>
                            <tr>
                                <td>Social :</td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow=" 50" aria-valuemin="0" aria-valuemax="100" style={{width: 200*(this.props.etudiant.social/this.props.etudiant.nbVote)}}>
                                        </div>
                                    </div>
                                </td> 

                                <td>
                                <div class="form-check">
                                    <input class="form-check-input"  type="radio" name="exampleRadios3" id="exampleRadios3O" value="oui" onChange={this.chargerSoc} />
                                    <label class="form-check-label" for="exampleRadios3O">
                                        oui
                                    </label>
                                    <input class="form-check-input" style={{marginLeft:10}} type="radio" name="exampleRadios3" id="exampleRadios3N"   onChange={this.chargerSoc} value="non"/>
                                    <label class="form-check-label" style={{marginLeft:25}} for="exampleRadios3N">
                                        non
                                    </label>
                                  </div>
                                </td>  
                            </tr>
                            <tr>
                                <td>Egoiste :</td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow=" 50" aria-valuemin="0" aria-valuemax="100" style={{width: 200*(this.props.etudiant.egoiste/this.props.etudiant.nbVote)}}>
                                        </div>
                                    </div>
                                </td>

                                <td>   
                                    <div class="form-check">
                                    <input class="form-check-input"  type="radio" name="exampleRadios4" id="exampleRadios4O" value="oui" onChange={this.chargerEgo} />
                                    <label class="form-check-label" for="exampleRadios14O">
                                        oui
                                    </label>
                                    <input class="form-check-input" style={{marginLeft:10}} type="radio" name="exampleRadios4" id="exampleRadios4N" onChange={this.chargerEgo} value="non"/>
                                    <label class="form-check-label" style={{marginLeft:25}} for="exampleRadios4N">
                                        non
                                    </label>
                                  </div>
                                    </td>
                            </tr>
                        </table>
                        <div class="float-right">
                            {  (!matiereB || !matiereD|| !matiereL|| !matiereM) &&<button type="button" style={{marginBottom:20, marginTop:20}} onClick={this.enregistrer.bind(this,this.props.etudiant._links.self.href)} class="btn btn-primary mr-1">enregistrer</button>  }
                            <button type="button" style={{marginBottom:20, marginTop:20,visibility:active }} onClick={()=>{this.showU()}} class="btn btn-success mr-1">Modifier</button>  
                            <button type="button" style={{marginBottom:20, marginTop:20,visibility:active}} onClick={()=>{this.showS()}} class="btn btn-danger">Supprimer</button>  
                            <Modal show={this.state.showS} onHide={()=>{this.hideS()}}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Supprimer étudiant</Modal.Title>   
                                </Modal.Header>
                                <Modal.Body>
                                <Form.Text className="text-muted">
                                    Etes vous sur de supprimer  {this.props.etudiant.nom } {this.props.etudiant.prenom} de la liste des étudiants?
                                </Form.Text>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={()=>{this.hideS()}} >
                                         Annuler
                                    </Button>
                                    <Button variant="danger" onClick={this.supprimer.bind(this,this.props.etudiant._links.self.href,this.props.cursus._links.self.href) }>
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
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Promotion</Form.Label>
                                            <Form.Control type="promotion" placeholder="Promotion" onChange={this.chargerPromotion} />
                                        </Form.Group>
                                        
                                        </Form>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={()=>{this.hideU()}} >
                                        Annuler
                                        </Button>
                                        <Button variant="primary" onClick={this.miseajour.bind(this,this.props.etudiant._links.self.href)}>
                                        modifier
                                        </Button>
                                    </Modal.Footer>
                                    </Modal>
                        </div> 



                    </div>
                </div> 
               
            }

        </div>
    }
   

}


export default InfoEtudiant;