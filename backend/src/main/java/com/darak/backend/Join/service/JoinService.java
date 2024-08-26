package com.darak.backend.Join.service;

import com.darak.backend.Item.entity.Item;
import com.darak.backend.Item.repository.ItemRepository;
import com.darak.backend.Item.service.ItemService;
import com.darak.backend.Join.dto.JoinRequestDto;
import com.darak.backend.Join.dto.JoinResponseDto;
import com.darak.backend.Join.dto.JoinSaveDto;
import com.darak.backend.Join.entity.Join;
import com.darak.backend.Join.repository.JoinRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class JoinService {
    private final JoinRepository joinRepository;
    private final ItemRepository itemRepository;
    public void Join_Save(JoinSaveDto joinSaveDto) throws Exception {
        if(joinRepository.findByItem_ItemNameAndItem_StoreName(
                joinSaveDto.getItem_name(), joinSaveDto.getStore_name()).isPresent()) {
            throw new Exception("이미 존재하는 아이템 입니다!");
        }
        Join join = Join.builder()
                .itemName(joinSaveDto.getItem_name())
                .storeName(joinSaveDto.getStore_name())
                .joinPrice(joinSaveDto.getJoin_price())
                .joinLimit(joinSaveDto.getJoin_limit())
                .joinPercent(joinSaveDto.getJoin_percent())
                .joinStartDay(joinSaveDto.getJoin_start_day())
                .joinEndDay(joinSaveDto.getJoin_end_day())
                .joinPeopleCount(0)
                .build();
        joinRepository.save(join);
    }
    public JoinResponseDto Join_select (JoinRequestDto joinRequestDto) throws Exception {
        Optional<Join> join = joinRepository.findByItem_ItemNameAndItem_StoreName(
                joinRequestDto.getItemName(), joinRequestDto.getStoreName());
        if(join.isEmpty()) {
            throw new Exception("공구 정보가 없는 아이템입니다!");
        }
        Join join1 = join.get();
        return new JoinResponseDto(joinRequestDto.getItemName(),
                joinRequestDto.getStoreName(),
                join1.getJoinPrice(),
                join1.getJoinLimit(),
                join1.getJoinPeopleCount(),
                join1.getJoinPercent(),
                join1.getJoinStartDay(),
                join1.getJoinEndDay());
    }
    @Transactional
    public void join_people_update(JoinRequestDto joinRequestDto) throws Exception {
        Optional<Join> join =joinRepository.findByItem_ItemNameAndItem_StoreName(
                joinRequestDto.getItemName(), joinRequestDto.getStoreName());
        Join join1 = join.get();
        if(join1.getJoinPeopleCount()<join1.getJoinLimit()) {
            join1.changeJoinPeopleCount(join1.getJoinPeopleCount()+1);
        }
        else{
            throw new Exception("꺼져 이제 수량 없음");
        }


    }
}
