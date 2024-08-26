package com.darak.backend.Join.controller;


import com.darak.backend.Join.dto.JoinRequestDto;
import com.darak.backend.Join.dto.JoinResponseDto;
import com.darak.backend.Join.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/join")
public class JoinController {

    private final JoinService joinService;

    @PatchMapping("/buy")
    public ResponseEntity<JoinResponseDto> plusJoinPerson(@RequestBody JoinRequestDto joinRequestDto) throws Exception {
        joinService.join_people_update(joinRequestDto);
        JoinResponseDto joinResponseDto = joinService.Join_select(joinRequestDto);
        return ResponseEntity.ok(joinResponseDto);
    }

    @GetMapping("/call/info")
    public ResponseEntity<JoinResponseDto> joinSelect(@RequestBody JoinRequestDto joinRequestDto) throws Exception {
        JoinResponseDto joinResponseDto = joinService.Join_select(joinRequestDto);
        return ResponseEntity.ok(joinResponseDto);
    }


}
