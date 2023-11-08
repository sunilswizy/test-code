package com.examly.springapp.DAO;
 
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
 
import com.examly.springapp.Cricketer;
 
 
public class CricketDAO {
    Connection connection = null;
    PreparedStatement statement = null;
    ResultSet resultSet;
    public List<Cricketer> getCricketers() throws SQLException {
        List<Cricketer> cricketers = new ArrayList<>();
        try {
            connection = JDBCUtils.getConnection();
            statement = connection.prepareStatement("select * from cricketers;");
            resultSet = statement.executeQuery();
 
            while(resultSet.next()) {
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                String country = resultSet.getString("country");
                Cricketer cricketer = new Cricketer(name, age, country);
                cricketers.add(cricketer);
            }
        }
        catch(SQLException e) {
            System.out.println(e.getMessage());
        }
        finally {
            JDBCUtils.close(statement, resultSet, connection);
        }
        return cricketers;
       
    }
   
}