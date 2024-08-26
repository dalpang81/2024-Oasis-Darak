package com.darak.backend.Item.entity;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "ITEMS")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long itemId;

    @Column(name = "item_name", nullable = false)
    private String itemName;

    @Column(name = "item_category")
    private String itemCategory;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "item_price")
    private int itemPrice;

    @Column(name = "item_image")
    private String itemImage;

    @Column(name = "item_like")
    private int itemLike;

    @Column(name = "item_production")
    private String itemProduction;

    @Column(name = "item_production_date")
    private String itemProductionDate;
}
