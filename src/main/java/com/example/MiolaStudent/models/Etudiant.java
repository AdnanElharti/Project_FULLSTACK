package com.example.MiolaStudent.models;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@CrossOrigin

public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    long id;
    @NonNull
    String nom;
    @NonNull
    String prenom;
    @NonNull
    private String tel;
    @NonNull
    private String mail;
    @NonNull
    private String mdp;
    @NonNull
    private String photo;
    @NonNull
    private String promotion;
    @OneToOne
    Cursus cursus;
    @NonNull
    private String devellopement;
    @NonNull
    private String baseDonnées;
    @NonNull
    private String langue;
    @NonNull
    private String mathematique;

    private Double egoiste;

    private Double serieux;

    private Double social;

    private Double ambitieux;
    
    private Double nbVote;


    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setCursus(Cursus cursus) {
        this.cursus = cursus;
    }



    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getTel() {
        return tel;
    }

    public String getMail() {
        return mail;
    }

    public String getMdp() {
        return mdp;
    }

    public String getPhoto() {
        return photo;
    }

    public Cursus getCursus() {
        return cursus;
    }



}

