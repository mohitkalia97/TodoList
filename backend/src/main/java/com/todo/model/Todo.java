package com.todo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Enumerated(value = EnumType.STRING)
    private TodoStatus todoStatus;
    @Column(length = 1000)
    private String text;

    public Todo(Long id, TodoStatus todoStatus, String text) {
        this.id = id;
        this.todoStatus = todoStatus;
        this.text = text;
    }

    public Todo() {
    }
}
