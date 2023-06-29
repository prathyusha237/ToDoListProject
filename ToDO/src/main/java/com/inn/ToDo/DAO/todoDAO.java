package com.inn.ToDo.DAO;

import com.inn.ToDo.Entity.ToDoPOJO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface todoDAO extends JpaRepository<ToDoPOJO,Integer>
{

}
