package com.darak.backend.Item.service;

import com.darak.backend.Item.dto.ItemRequestDto;
import com.darak.backend.Item.dto.ItemSaveDto;
import com.darak.backend.Item.entity.Item;
import com.darak.backend.Item.repository.ItemRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;
    public void Item_Save(ItemSaveDto itemSaveDto) throws Exception {
        if(itemRepository.findByItemName(itemSaveDto.getItem_name()).isPresent()) {
            throw new Exception("이미 존재하는 아이템 입니다!");
        }
        Item item = Item.builder()
                .itemName(itemSaveDto.getItem_name())
                .itemPrice(itemSaveDto.getItem_price())
                .itemCategory(itemSaveDto.getItem_category())
                .storeName(itemSaveDto.getStore_name())
                .itemImage(itemSaveDto.getItem_image())
                .itemProduction(itemSaveDto.getItem_production())
                .itemProductionDate(itemSaveDto.getItem_production_date())
                .itemLike(0)
                .build();
        itemRepository.save(item);
    }
    public ItemRequestDto Item_Select(String item_name) throws Exception {
        Optional<Item> Isitem = itemRepository.findByItemName(item_name);
        if(Isitem.isEmpty()) {
            throw new Exception("이딴 아이템 없으니 다시 가져오세요");
        }
        Item item = Isitem.get();
        return new ItemRequestDto(item.getItemName(),item.getStoreName(), item.getItemCategory() , item.getItemPrice(), item.getItemImage(), item.getItemProduction(), item.getItemProductionDate());
    }
}
