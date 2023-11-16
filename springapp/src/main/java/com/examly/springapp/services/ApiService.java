package com.examly.springapp.services;

import java.util.ArrayList;
import java.util.List;

import com.examly.springapp.entities.Player;
import com.examly.springapp.entities.Team;
import com.examly.springapp.repositories.PlayerRepository;
import com.examly.springapp.repositories.TeamRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApiService {

    @Autowired
    PlayerRepository pr;

    @Autowired
    TeamRepository tr;

    public boolean addTeam(Team team) {
        if(team!=null){
            tr.save(team);
            return true;
        }
        return false;
    }

	public List<Team> getAllTeams() {
		return tr.findAll();
	}

    public boolean addPlayer(Player player) {
        if(player!=null){
            pr.save(player);
            return true;
        }
        return false;
    }

    public List<Player> getAllPlayers() {
        return pr.findAll();
    }

    public List<Team> getAll() {
        return tr.findAll();
    }

	public List<Player> allPlayers(/*long teamId*/) {
        // if(tr.existsById(teamId)){
        //     return pr.findAll();
        // }
		return pr.findAll();
	}

    public List<Player> unSoldPlayers() {
        List<Player> plist=pr.findAll();
        List<Player> unsold=new ArrayList<>();
        if(plist!=null){
            for(Player p:plist){
                if(!p.isSold()){
                    unsold.add(p);
                }
            }
    }
        return unsold;
    }

    public List<Player> soldPlayers(){
        List<Player> plist=pr.findAll();
        List<Player> sold=new ArrayList<>();
        if(plist!=null){
            for(Player p:plist){
                if(p.isSold()){
                    sold.add(p);
                }
            }
        }
        return sold;
    }

}
