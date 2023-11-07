package com.examly.springapp.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Team {
    @Id
    private long id;
    private String name;
    private double maximumBudget;

    public Team() {
    }
    public Team(long id, String name, double maximimBudget) {
        this.id = id;
        this.name = name;
        this.maximumBudget = maximimBudget;
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
    public double getMaximimBudget() {
        return maximumBudget;
    }
    public void setMaximimBudget(double maximimBudget) {
        this.maximumBudget = maximimBudget;
    }
    @Override
    public String toString() {
        return "Team [id=" + id + ", maximimBudget=" + maximumBudget + ", name=" + name + "]";
    }

    
}
