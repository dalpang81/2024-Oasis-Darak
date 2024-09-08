package com.darak.backend.login.oauth2.service;

import com.darak.backend.login.oauth2.Role;
import com.darak.backend.login.oauth2.dto.UserSignUpDto;
import com.darak.backend.login.oauth2.entity.User;
import com.darak.backend.login.oauth2.repository.UserRepository;
import jakarta.transaction.Transactional;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signUp(UserSignUpDto userSignUpDto) throws Exception {

        if (userRepository.findByEmail(userSignUpDto.getEmail()).isPresent()) {
            throw new Exception("이미 존재하는 이메일입니다.");
        }

        if (userRepository.findByNickname(userSignUpDto.getNickname()).isPresent()) {
            throw new Exception("이미 존재하는 닉네임입니다.");
        }

        User user = User.builder()
                .email(userSignUpDto.getEmail())
                .password(userSignUpDto.getPassword())
                .nickname(userSignUpDto.getNickname())
                .age(userSignUpDto.getAge())
                .city(userSignUpDto.getCity())
                .role(Role.USER)
                .build();

        user.passwordEncode(passwordEncoder);
        userRepository.save(user);
    }
    public UserSignUpDto provide_info(String userid) throws Exception {
        User user = userRepository.findByEmail(userid).orElse(null);
        if (user == null) {
            throw new Exception("존재하지 않는 사용자입니다");
        }
        return new UserSignUpDto(user.getEmail(),user.getPassword(),user.getNickname(),user.getAge(),user.getCity());
    }
}
