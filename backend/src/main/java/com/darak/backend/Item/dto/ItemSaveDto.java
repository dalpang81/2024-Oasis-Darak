package com.darak.backend.Item.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ItemSaveDto {

    private String item_category;
    private String item_name;
    private String store_name;
    private int item_price;
    private String item_image;
    private String item_production;
    private String item_production_date;
}
