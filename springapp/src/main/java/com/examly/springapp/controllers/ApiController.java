package com.examly.springapp.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.examly.springapp.entities.Player;
import com.examly.springapp.entities.Team;
import com.examly.springapp.services.ApiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://8081-dcedfdcbcfcffddecbadfcfbdfaaabadc.premiumproject.examly.io")
public class ApiController {

    @Autowired
    ApiService service;
    
    // @GetMapping("/api/admin/welcome")
    // public String welcome(){
    //     return "Welcome to SpringProject";
    // }

    @GetMapping("/team/getAllList")
    public List<Team> getAll(){
        return service.getAll();
    }

    @PostMapping("/api/admin/teams")
    public boolean addTeam(@RequestBody Team team){
        return service.addTeam(team);
    }

    @GetMapping("/api/admin/teams")
    public List<Team> getAllTeams(){
        return service.getAllTeams();
    }

    @PostMapping("/api/admin/players")
    public boolean addPlayer(@RequestBody Player player){
        return service.addPlayer(player);
    }

    @GetMapping("/api/admin/players")
    public List<Player> getAllPlayers(){
        return service.getAllPlayers();
    }

    @GetMapping("/api/organizer/player-list")
    public List<Player> allPlayers(/*@RequestParam long teamId*/)
    {
        return service.allPlayers(/*teamId*/);
    }

    @GetMapping("/api/organizer/unsold-players")
    public List<Player> unSoldPlayers(){
        return service.unSoldPlayers();
    }

    @GetMapping("/api/organizer/sold-players")
    public List<Player> soldPlayers(){
        return service.soldPlayers();
    }

}
