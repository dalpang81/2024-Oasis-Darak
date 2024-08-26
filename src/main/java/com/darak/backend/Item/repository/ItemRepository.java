package com.darak.backend.Item.repository;

import com.darak.backend.Item.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Long> {
    Optional<Item> findByItemName(String item_name);

}
