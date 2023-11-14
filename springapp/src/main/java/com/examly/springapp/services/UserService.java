package com.examly.springapp.services;
 
import com.examly.springapp.entities.User;
import com.examly.springapp.repositories.UserRepository;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
 
    public User registerUser(User user) {
        return userRepository.save(user);
    }
   
   
}