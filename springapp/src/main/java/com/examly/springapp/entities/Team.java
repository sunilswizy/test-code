package com.examly.springapp.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Team {
    @Id
    private long id;
    private String name;
    private double maximumBudget;

    @OneToMany
    List<Player> players;

    public Team() {
    }

    
    public Team(long id, String name, double maximumBudget, List<Player> players) {
        this.id = id;
        this.name = name;
        this.maximumBudget = maximumBudget;
        this.players = players;
    }


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public double getMaximumBudget() {
        return maximumBudget;
    }


    public void setMaximumBudget(double maximumBudget) {
        this.maximumBudget = maximumBudget;
    }


    public List<Player> getPlayers() {
        return players;
    }


    public void setPlayers(List<Player> players) {
        this.players = players;
    }


    @Override
    public String toString() {
        return "Team [id=" + id + ", maximumBudget=" + maximumBudget + ", name=" + name + ", players=" + players + "]";
    }

    
}
