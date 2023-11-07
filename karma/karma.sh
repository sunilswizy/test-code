#!/bin/bash
export CHROME_BIN=/usr/bin/chromium-browser

if [ ! -d "/home/coder/project/workspace/angularapp" ]
then
    cp -r /home/coder/project/workspace/karma/angularapp /home/coder/project/workspace/;
fi

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;

    # checking for app-routing component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/routing" ]
    then
        cp /home/coder/project/workspace/karma/app-routing.module.spec.ts /home/coder/project/workspace/angularapp/src/app/routing/app-routing.module.spec.ts;
    else
        echo "Week5_Day1_should route to home page by default FAILED";
        echo "Week5_Day1_should route to admin page FAILED";
        echo "Week5_Day2_should route to default path for invalid paths FAILED";
        echo "Week5_Day2_should route to organizer page FAILED";
    fi

    # checking for admin-services component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/services" ]
    then
        cp /home/coder/project/workspace/karma/admin.service.spec.ts /home/coder/project/workspace/angularapp/src/app/services/admin.service.spec.ts;
    else
        echo "Week5_Day3_should create AdminServices FAILED";
        echo "Week5_Day3_should retrieve teams from the backend FAILED";
        echo "Week5_Day3_should create a new team via the backend FAILED";
        echo "Week5_Day3_should retrieve players from the backend FAILED";
    fi

    # checking for auth-services component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/services" ]
    then
        cp /home/coder/project/workspace/karma/auth.service.spec.ts /home/coder/project/workspace/angularapp/src/app/services/auth.service.spec.ts;
    else
        echo "Week5_Day4_should_create_authServices FAILED";
    fi

    # checking for organizer-services component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/services" ]
    then
        cp /home/coder/project/workspace/karma/organizer.service.spec.ts /home/coder/project/workspace/angularapp/src/app/services/organizer.service.spec.ts;
    else
        echo "Week5_Day3_should create organizerServices FAILED";
    fi

    # checking for registrations component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/registration" ]
    then
        cp /home/coder/project/workspace/karma/registration.component.spec.ts /home/coder/project/workspace/angularapp/src/app/registration/registration.component.spec.ts;
    else
        echo "Week5_Day4_should navigate to organizer on organizer register FAILED";
        echo "Week5_Day4_should navigate to admin on admin register FAILED";
    fi

    # checking for player component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/player" ]
    then
        cp /home/coder/project/workspace/karma/player.component.spec.ts /home/coder/project/workspace/angularapp/src/app/player/player.component.spec.ts;
    else
        echo "Week4_Day4_create_Player_component FAILED";
        echo "Week4_Day5_check the bidding amount FAILED";
        echo "Week4_Day5_check bidding amount in status div FAILED";
        echo "Week4_Day6_should display Player information by ngfor FAILED";
        echo "Week5_Day2_should have edit buttons for each player FAILED";
        echo "Week5_Day2_should have delete buttons for each player FAILED";
    fi 

    # checking for PlayerModel 
    if [ -d "/home/coder/project/workspace/angularapp/src/models" ]
    then
        cp /home/coder/project/workspace/karma/player.model.spec.ts /home/coder/project/workspace/angularapp/src/models/player.model.spec.ts;
    else
        echo "Week4_Day3_should_create_Player_instance FAILED";
    fi 

    
    # checking for Team Component 
    if [ -d "/home/coder/project/workspace/angularapp/src/app/team" ]
    then
        cp /home/coder/project/workspace/karma/team.component.spec.ts /home/coder/project/workspace/angularapp/src/app/team/team.component.spec.ts;
    else
        echo "Week4_Day4_create_Team_Component FAILED";
        echo "Week4_Day5_check the Maximumbudget amount to create teams FAILED";
        echo "Week4_Day5_check MaxBudget amount in status div to create teams FAILED";
        echo "Week4_Day6_should display team information by ngfor FAILED";
        echo "Week5_Day2_should have edit buttons for each team FAILED";
        echo "Week5_Day2_should have delete buttons for each team FAILED";
    fi 

    # checking for TeamModel 
    if [ -d "/home/coder/project/workspace/angularapp/src/models" ]
    then
        cp /home/coder/project/workspace/karma/team.model.spec.ts /home/coder/project/workspace/angularapp/src/models/team.model.spec.ts;
    else
        echo "Week4_Day3_create_Team_instance FAILED";
    fi 

    # checking for UserModel 
    if [ -d "/home/coder/project/workspace/angularapp/src/models" ]
    then
        cp /home/coder/project/workspace/karma/user.model.spec.ts /home/coder/project/workspace/angularapp/src/models/user.model.spec.ts;
    else
        echo "Week4_Day3_should_create_User_instance FAILED";
    fi 

    

    if [ -d "/home/coder/project/workspace/angularapp/node_modules" ]; 
    then
        cd /home/coder/project/workspace/angularapp/
        npm test;
    else
        cd /home/coder/project/workspace/angularapp/
        yes | npm install
        npm test
    fi 
	
else   
    echo "Week4_Day3_should_create_Player_instance FAILED";
    echo "Week4_Day3_create_Team_instance FAILED";
    echo "Week4_Day3_should_create_User_instance FAILED";
    echo "Week4_Day4_create_Player_component FAILED";
    echo "Week4_Day4_create_Team_Component FAILED";
    echo "Week4_Day5_check the bidding amount FAILED";
    echo "Week4_Day5_check bidding amount in status div FAILED";
    echo "Week4_Day5_check the Maximumbudget amount to create teams FAILED";
    echo "Week4_Day5_check MaxBudget amount in status div to create teams FAILED";
    echo "Week4_Day6_should display Player information by ngfor FAILED";
    echo "Week4_Day6_should display team information by ngfor FAILED";
    echo "Week5_Day1_should route to home page by default FAILED";
    echo "Week5_Day1_should route to admin page FAILED";
    echo "Week5_Day2_should route to default path for invalid paths FAILED";
    echo "Week5_Day2_should route to organizer page FAILED";
    echo "Week5_Day2_should have edit buttons for each player FAILED";
    echo "Week5_Day2_should have delete buttons for each player FAILED";
    echo "Week5_Day2_should have edit buttons for each team FAILED";
    echo "Week5_Day2_should have delete buttons for each team FAILED";
    echo "Week5_Day3_should create AdminServices FAILED";
    echo "Week5_Day3_should retrieve teams from the backend FAILED";
    echo "Week5_Day3_should create a new team via the backend FAILED";
    echo "Week5_Day3_should retrieve players from the backend FAILED";
    echo "Week5_Day3_should create organizerServices FAILED";
    echo "Week5_Day4_should_create_authServices FAILED";
    echo "Week5_Day4_should navigate to organizer on organizer register FAILED";
    echo "Week5_Day4_should navigate to admin on admin register FAILED";
fi
