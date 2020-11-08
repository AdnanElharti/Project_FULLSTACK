package com.example.MiolaStudent.models;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@CrossOrigin

public class Cursus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;


    @NonNull
    String etablissementBac;
    @NonNull
    String etablissementDeugDut;
    @NonNull
    String etablissementLicense;
    @NonNull
    String typedipdeug;
    @NonNull
    String typelicence;
    @NonNull
    String filiereBac;
    @NonNull
    String filier1ereAnnee;
    @NonNull
    String filier2emeAnnee;
    @NonNull
    String filier3emeAnnee;
    @NonNull
    Double noteBac;
    @NonNull
    Double noteS1;
    @NonNull
    Double noteS2;
    @NonNull
    Double noteS3;
    @NonNull
    Double noteS4;
    @NonNull
    Double noteS5;
    @NonNull
    Double noteS6;


}
