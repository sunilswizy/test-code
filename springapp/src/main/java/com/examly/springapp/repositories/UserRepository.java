package com.examly.springapp.repositories;
import com.examly.springapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer>{

    User findByUsername(String username);

}
