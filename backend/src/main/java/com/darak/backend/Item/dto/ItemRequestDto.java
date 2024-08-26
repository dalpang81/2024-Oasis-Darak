package com.darak.backend.Item.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ItemRequestDto {
    private String item_name;
    private String store_name;

    private String item_category;
    private int item_price;
    private String item_image;
    private String item_production;
    private String item_production_date;
}
