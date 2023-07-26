package com.feseek.api;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.User;
import com.feseek.repository.UsersRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

	//ログイン・ログアウト
@RestController
@RequestMapping("/api")
public class LoginRestController {

    @Autowired
    private UsersRepository usersRepository;

    //ログイン
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> loginRequest, HttpServletRequest request) {
        String id = loginRequest.get("id");
        String password = loginRequest.get("password");

        Optional<User> optionalUser = usersRepository.findById(id);
        User user = optionalUser.orElse(null);

        if (user != null && user.getPassword().equals(password)) {
            // 認証成功
            HttpSession session = request.getSession();
            session.setAttribute("id", id);
            session.setAttribute("categoriesId", user.getCategoriesId());
            return "Login successful";
        } else {
            // 認証失敗
            return "Invalid credentials";
        }
    }
    
    //ログアウト
    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.removeAttribute("id");
            session.removeAttribute("categoriesId");
            session.invalidate();
        }
        return "Logout successful";
    }

}


