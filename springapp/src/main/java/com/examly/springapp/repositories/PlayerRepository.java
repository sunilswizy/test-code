package com.examly.springapp.repositories;

import com.examly.springapp.entities.Player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long>{
    
}
