package com.feseek.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserRestController {

//    private UserRepository userRepository;

  //  @Autowired
   // public UserRestController(UserRepository userRepository) {
    //    this.userRepository = userRepository;
    //}

   // @PostMapping("/register")
   // public String registerUser(@RequestBody UserRegistrationRequest request) {
        // ユーザー情報のバリデーションを行います（省略）。
        
        // UserRegistrationRequestからUserエンティティを作成します。
     //   User user = new User();
      //  user.setUsername(request.getUsername());
       // user.setEmail(request.getEmail());
        //user.setPassword(request.getPassword());
       // user.setUserType(request.getUserType());

        // データベースにユーザーを保存します。
       // userRepository.save(user);

      //  return "ユーザーが正常に登録されました。";
}
