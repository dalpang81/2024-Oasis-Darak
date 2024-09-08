package com.darak.backend.login.oauth2.controller;

import com.darak.backend.login.global.jwt.service.JwtService;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;
@Controller
public class OAuthController {

    private final JwtService jwtService;

    public OAuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @GetMapping("/oauth2/sign-up")
    public RedirectView handleOAuthCallback(HttpServletResponse response) {
        // JWT 토큰을 생성
        String accessToken = response.getHeader("access-token");

        // 클라이언트를 리다이렉트하며, URL에 토큰을 쿼리 매개변수로 추가
        String redirectUrl = "http://localhost:8080/oauth2/callback?token=" + accessToken;

        // 리다이렉트
        return new RedirectView(redirectUrl);
    }
}
