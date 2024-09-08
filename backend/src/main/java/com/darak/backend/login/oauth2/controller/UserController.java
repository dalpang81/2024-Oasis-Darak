package com.darak.backend.login.oauth2.controller;


import com.darak.backend.login.global.oauth2.ResponseUtil;
import com.darak.backend.login.oauth2.SecurityUtils;
import com.darak.backend.login.oauth2.dto.UserSignUpDto;
import com.darak.backend.login.oauth2.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @PostMapping("/sign-up")
    public String signUp(@RequestBody UserSignUpDto userSignUpDto) throws Exception {
        userService.signUp(userSignUpDto);
        return "회원가입 성공";
    }

    @GetMapping("/jwt-test")
    public ResponseEntity<String> jwtTest() throws Exception {

        return ResponseEntity.ok("로그인 성공");
    }
    @GetMapping("/login/info")
    public ResponseEntity<UserSignUpDto> login() throws Exception {
        String userId  = SecurityUtils.getCurrentUserEmail();
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
        return ResponseEntity.status(HttpStatus.OK).body(userService.provide_info(userId));
    }

}