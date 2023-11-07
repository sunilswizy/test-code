package com.examly.springapp;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringappApplication {
        static List<Cricketer>cList=new ArrayList<>();
        public static void main(String[] args) {
            SpringApplication.run(SpringappApplication.class, args);
            addCricketers();
            sortCricketers();
    
        }
        public static void  addCricketers()
        {
            
            Cricketer c=new Cricketer("scahin",50,"India");
            cList.add(c);
        }
        public static void sortCricketers()
        {
            Collections.sort(cList,new Cricketer());
        }

    public void displayCricketersFromDB(){

    }

    public void retrieveDataFromBothTables(){

    }

}
