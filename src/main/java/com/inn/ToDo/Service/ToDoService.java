package com.inn.ToDo.Service;

import com.inn.ToDo.DAO.todoDAO;
import com.inn.ToDo.Entity.ToDoPOJO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService {

    @Autowired
    todoDAO dao;
    public List<ToDoPOJO> getAll() {
        return dao.findAll();
    }

    public ToDoPOJO adddItem(ToDoPOJO toDoPOJO) {
        return dao.save(toDoPOJO);
    }



    public ToDoPOJO findById(int id) {
        return dao.findById(id).get();
    }

    public ToDoPOJO update(int id,ToDoPOJO toDoPOJONew) {

        ToDoPOJO toDoPOJO = dao.findById(id).get();

        toDoPOJO.setTitle(toDoPOJONew.getTitle());
        toDoPOJO.setId(toDoPOJONew.getId());
        toDoPOJO.setDate(toDoPOJONew.getDate());
        toDoPOJO.setStatus(toDoPOJONew.getStatus());

        return dao.save(toDoPOJO);


    }

    public ToDoPOJO getById(int id) {
        return dao.findById(id).get();
    }

    public ToDoPOJO delete(int id) {
        ToDoPOJO toDoPOJO = dao.findById(id).get();
        dao.deleteById(id);
        return toDoPOJO;
    }
}
