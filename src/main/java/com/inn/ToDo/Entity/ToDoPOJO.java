package com.inn.ToDo.Entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
@Entity
@Table(name="todo_list")
public class ToDoPOJO {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private Date date;

        private String title;
        private String status;
}
