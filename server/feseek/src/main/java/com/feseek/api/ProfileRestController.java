package com.feseek.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.User;
import com.feseek.repository.UsersRepository;

@RestController
public class ProfileRestController {
	//プロフィール(主催者・一般利用者)
	@Autowired
	private UsersRepository repository;
	
	@GetMapping("/api/user/profile")
	protected Optional<User> profile(@RequestBody String id){
		return repository.findById(id);
	}
	
	
	
	

}
