package com.examly.springapp.DAO;
 
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
 
import com.examly.springapp.Team;
 
public class TeamDAO
{
    Connection connection = null;
    PreparedStatement statement = null;
    ResultSet resultSet = null;
    public List<Team> getAllTeams()
    {
        List<Team> teamList = new ArrayList<>();
        try{
            connection = JDBCUtils.getConnection();
            statement = connection.prepareStatement("SELECT * FROM team");
            resultSet = statement.executeQuery();
            while(resultSet.next())
            {
                String name=resultSet.getString("name");
                String country=resultSet.getString("country");
                Team team = new Team(name,country);
                teamList.add(team);
            }
        }
        catch(SQLException e) {
            e.printStackTrace();
        }
        finally {
            JDBCUtils.close(statement, resultSet, connection);
        }
        return teamList;
    }
 
    /* public void addTeams(Team team)
    {
        try
        {
            conn=JDBCUtils.getConnection();
            PreparedStatement stmt=conn.prepareStatement("INSERT INTO team(name,country) VALUES (?,?)");
            {
                stmt.setString(1,team.getName());
                stmt.setString(2,team.getName());
                stmt.executeUpdate();
            }
        }catch(SQLException e)
        {
            e.printStackTrace();
        }finally{
            JDBCUtils.closeResultSet(rs);
            JDBCUtils.closeStatement(stmt);
            JDBCUtils.closeConnection(conn);
        }
    }
*/
    public void retrieveDataFromBothTables(){
        try {
            connection=JDBCUtils.getConnection();
            String query = "SELECT c.name AS cricketer_name, c.country AS cricketer_country,t.name AS team_name,t.country AS team_country FROM cricketer c INNER JOIN team t ON c.country=t.country";
            PreparedStatement stmt = connection.prepareStatement(query);
 
            ResultSet rs = stmt.executeQuery();
            while(rs.next())
            {
                String cricketerName=rs.getString("cricketer_name");
                String cricketerCountry=rs.getString("cricketer_country");
                String teamName=rs.getString("team_name");
                String teamCountry=rs.getString("team_country");
 
                System.out.println("Cricketer: "+cricketerName);
                System.out.println("Cricketer Country: "+cricketerCountry);
                System.out.println("Team: "+teamName);
                System.out.println("Team Country: "+teamCountry);
                System.out.println("------------------------------------------");
 
            }
        }catch(SQLException e) {
            e.printStackTrace();
        }
        finally{
            JDBCUtils.close(statement, resultSet, connection);
           
        }
    }
}