package com.example.MiolaStudent.repositories;


import com.example.MiolaStudent.models.Cursus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository 
public interface CursusRepository extends JpaRepository<Cursus, Long> {
}
