package com.todo.controller;

import com.todo.model.User;
import com.todo.service.UserService;
import jakarta.persistence.Id;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Id
    private Long id;

    @PostMapping("/add-user")
    public ResponseEntity<Void> addUser(@RequestBody User user){
        userService.addUser(user);
        return ResponseEntity.ok().build();
    }

   @GetMapping("/find-all-users")
   public ResponseEntity<List<User>> findAllUsers(){
        List<User> userList = userService.findAllUsers();
        return ResponseEntity.ok(userList);
   }

   @DeleteMapping("/delete-user/{id}")
   public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
   }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
