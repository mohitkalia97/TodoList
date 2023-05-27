package com.todo.service;

import com.todo.model.Todo;
import com.todo.model.TodoStatus;
import com.todo.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TodoService {
    private TodoRepository todoRepository;
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public void addTodo(Todo todo){
        todoRepository.save(todo);
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    public void changeStatusById(Long id) {
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()) {
            Todo todo = todoOptional.get();
            if (todo.getTodoStatus().equals(TodoStatus.CLOSED)) {
                todo.setTodoStatus(TodoStatus.OPEN);
            } else if (todo.getTodoStatus().equals(TodoStatus.OPEN)) {
                todo.setTodoStatus(TodoStatus.CLOSED);
            }
            todoRepository.save(todo);
        }
    }

    public List<Todo> findAllOpenTodos() {
        return todoRepository.findAll().stream()
                .filter(todo -> {
                    TodoStatus todoStatus = todo.getTodoStatus();
                    return todoStatus != null && todoStatus.equals(TodoStatus.OPEN);
                })
                .collect(Collectors.toList());
    }

    public List<Todo> findAllClosedTodos() {
        return todoRepository.findAll().stream()
                .filter(todo -> {
                    TodoStatus todoStatus = todo.getTodoStatus();
                    return todoStatus != null && todoStatus.equals(TodoStatus.CLOSED);
                })
                .collect(Collectors.toList());
    }


    public void deleteAllTodos() {
        todoRepository.deleteAll();
    }
}
