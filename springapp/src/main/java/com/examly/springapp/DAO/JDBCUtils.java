package com.examly.springapp.DAO;
import java.sql.*;
 
public class JDBCUtils {
   
    private static String URL="jdbc:mysql://localhost:3306/appdb?createDatabaseIfNotExist=true";
    private static String USERNAME="root";
    private static String PASSWORD="examly";
 
    public static Connection getConnection() throws SQLException {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        }
        catch(SQLException e) {
            e.printStackTrace();
            throw e;
        }
        return connection;
    }
    public static void close(PreparedStatement statement, ResultSet resultSet, Connection connection) {
        try {
            if(resultSet != null) {
                resultSet.close();
            }
            if(statement != null) {
                statement.close();
            }
            if(connection != null) {
                connection.close();
            }
        }
        catch(SQLException e) {
            e.printStackTrace();
        }
    }
}
 