package com.todo.controller;

import com.todo.model.Todo;
import com.todo.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
@CrossOrigin("http://127.0.0.1:5173/")
public class TodoController {
    private final TodoService todoService;
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }
    @GetMapping("/find-all-open-todos")
    public ResponseEntity<List<Todo>> findAllOpenTodos(){
        List<Todo> allOpenTodos = todoService.findAllOpenTodos();
        return ResponseEntity.ok(allOpenTodos);
    }

    @GetMapping("/find-all-closed-todos")
    public ResponseEntity<List<Todo>> findAllClosedTodos(){
        List<Todo> allClosedTodos = todoService.findAllClosedTodos();
        return ResponseEntity.ok(allClosedTodos);
    }

    @PostMapping("/add-todo")
    public ResponseEntity<Void> addTodo(@RequestBody Todo todo){
        todoService.addTodo(todo);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-todo/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-all-todos")
    public ResponseEntity<Void> deleteAllTodos(){
        todoService.deleteAllTodos();
        return ResponseEntity.ok().build();
    }

    @PutMapping("/change-status/{id}")
    public ResponseEntity<Void> changeStatusById(@PathVariable Long id){
        todoService.changeStatusById(id);
        return ResponseEntity.ok().build();
    }
}
