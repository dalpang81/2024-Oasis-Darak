package com.darak.backend.Item.controller;

import com.darak.backend.Item.dto.ItemRequestDto;
import com.darak.backend.Item.dto.ItemSaveDto;
import com.darak.backend.Item.dto.ItemSaveResponse;
import com.darak.backend.Item.service.ItemService;
import com.darak.backend.Join.dto.JoinSaveDto;
import com.darak.backend.Join.service.JoinService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/item")
public class ItemController {
    private final ItemService itemService;
    private final JoinService joinService;

    @PostMapping("/save")
    public ResponseEntity<ItemSaveResponse> save(@RequestBody ObjectNode saveObj) throws Exception , JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        ItemSaveDto itemSaveDto = mapper.treeToValue(saveObj.get("item"), ItemSaveDto.class);
        JoinSaveDto joinSaveDto = mapper.treeToValue(saveObj.get("join"), JoinSaveDto.class);
        itemService.Item_Save(itemSaveDto);
        joinService.Join_Save(joinSaveDto);
        return ResponseEntity.ok(new ItemSaveResponse("아이템 및 공구 정보 저장이 완료되었습니다!"));
    }

    @GetMapping("/call/{item_name}")
    public ResponseEntity<ItemRequestDto> getItem(@RequestBody @PathVariable String item_name) throws Exception {
        ItemRequestDto itemRequestDto = itemService.Item_Select(item_name);
         return ResponseEntity.ok(itemRequestDto);
    }
}
