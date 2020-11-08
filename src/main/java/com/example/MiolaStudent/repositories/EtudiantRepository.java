package com.example.MiolaStudent.repositories;

import com.example.MiolaStudent.models.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@CrossOrigin
@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {

 
}
