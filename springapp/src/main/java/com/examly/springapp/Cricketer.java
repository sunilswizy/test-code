package com.examly.springapp;

import java.util.Comparator;

public class Cricketer implements Comparator<Cricketer> {
    private String name;
    private int age;
    private String country;
    
    public int compare(Cricketer c1,Cricketer c2)
    {
        return c1.getAge()-c2.getAge();
    }
    public Cricketer() {
    }
    public Cricketer(String name, int age, String country) {
        this.name = name;
        this.age = age;
        this.country = country;
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
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    @Override
    public String toString() {
        return "Cricketer [age=" + age + ", country=" + country + ", name=" + name + "]";
    }
    
}
