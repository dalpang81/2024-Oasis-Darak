package com.darak.backend.Join.entity;

import jakarta.persistence.Column;
import lombok.*;

import java.io.Serializable;



@EqualsAndHashCode
@Data
public class joinId implements Serializable {
    @Column(name = "item_name")
    private String itemName;
    @Column(name = "store_name")
    private String storeName;

    public joinId(){}
    public joinId(String itemName, String storeName) {
        this.itemName = itemName;
        this.storeName = storeName;
    }
}
