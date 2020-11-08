import axios from 'axios';

const etudiant_url = " http://localhost:4000/api/etudiants "

class etudiantJs{

    getEtudiants(){
        return axios.get(etudiant_url);
    }

}
export default new etudiantJs();