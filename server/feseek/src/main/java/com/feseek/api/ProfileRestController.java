package com.feseek.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.feseek.entity.User;
import com.feseek.repository.UsersRepository;

@RestController
public class ProfileRestController {
	//プロフィール(主催者・一般利用者)
	@Autowired
	private UsersRepository repository;
	
	//表示
	@GetMapping("/api/user/profile/{id}")
	protected Optional<User> profile(@PathVariable String id){
		return repository.findById(id);
	}
	
	//更新
	
	//退会

}
