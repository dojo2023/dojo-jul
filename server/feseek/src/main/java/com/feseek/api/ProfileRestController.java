package com.feseek.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@PostMapping("/api/user/profile/edit")
	protected User edit(@RequestBody User user) {
		//対象のIDが存在するかチェックする
		repository.save(user);
		return user;
	}
	
	//退会
	@PostMapping("/api/user/profile/delete")
	protected User delete(@RequestBody User user) {
		repository.delete(user);
		return user;
	}	

}
