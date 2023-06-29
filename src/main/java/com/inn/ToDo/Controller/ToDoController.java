package com.inn.ToDo.Controller;


import com.inn.ToDo.Entity.ToDoPOJO;
import com.inn.ToDo.Service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class ToDoController {

    @Autowired
    ToDoService toDoService;

    @GetMapping("/items/{id}")
    public ToDoPOJO getById(@PathVariable int id)
    {
        return toDoService.getById(id);
    }

    @GetMapping("/items")
    public List<ToDoPOJO> getAll()
    {
        return toDoService.getAll();
    }

    @PostMapping("/items")
    public ToDoPOJO addItem(@RequestBody ToDoPOJO toDoPOJO)
    {
        return toDoService.adddItem(toDoPOJO);
    }

    @PutMapping("/items/{id}")
     public ToDoPOJO updateToDoItem(@PathVariable int id ,@RequestBody ToDoPOJO toDoPOJONew)
     {
         return toDoService.update(id,toDoPOJONew);
     }

     @DeleteMapping("/items/{id}")
     public ToDoPOJO deleteToDoItem(@PathVariable int id)
     {
         return toDoService.delete(id);
     }




}
