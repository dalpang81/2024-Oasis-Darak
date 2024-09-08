package com.darak.backend.login.oauth2;

import com.darak.backend.login.oauth2.entity.User;
import com.darak.backend.login.oauth2.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
@RequiredArgsConstructor
public class SecurityUtils{
    public static String getCurrentUserEmail() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated()) {
            // Principal 객체가 제대로 들어오는지 디버그 또는 로그로 확인
            UserDetails principal = (UserDetails)authentication.getPrincipal();
            String username= principal.getUsername();
            return username;
        }

        return null;
    }

}
