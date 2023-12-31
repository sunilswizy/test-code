package com.examly.springapp.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "players")
public class Player {
    @Id
    private long id;
    private String name;
    private int age;
    private String category;
    private double biddingprice;
    private boolean sold;
    private String email;
    
    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="teamid")
    Team team;

    public Player() {
    }
    

    public Player(long id, String name, int age, String category, double biddingprice, boolean sold, String email,
            Team team) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.category = category;
        this.biddingprice = biddingprice;
        this.sold = sold;
        this.email = email;
        this.team = team;
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
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public double getBiddingprice() {
        return biddingprice;
    }
    public void setBiddingprice(double biddingprice) {
        this.biddingprice = biddingprice;
    }
    public boolean isSold() {
        return sold;
    }
    public void setSold(boolean sold) {
        this.sold = sold;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    public Team getTeam() {
        return team;
    }


    public void setTeam(Team team) {
        this.team = team;
    }


    @Override
    public String toString() {
        return "Player [age=" + age + ", biddingprice=" + biddingprice + ", category=" + category + ", email=" + email
                + ", id=" + id + ", name=" + name + ", sold=" + sold + ", team=" + team + "]";
    }


   


    
}
