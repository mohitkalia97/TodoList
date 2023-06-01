package com.todo.service;

import com.todo.model.User;
import com.todo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
    public void addUser(User user){
        userRepository.save(user);
    }


    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean doesUsernameExist(String username) {
        return userRepository.findByUsername(username) != null;
    }
}
