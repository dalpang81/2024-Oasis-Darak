package com.darak.backend.Join.repository;

import com.darak.backend.Item.entity.Item;
import com.darak.backend.Join.entity.Join;
import com.darak.backend.Join.entity.joinId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JoinRepository extends JpaRepository<Join, joinId> {

    // 복합 키를 사용하는 경우, 메서드 시그니처는 각 필드를 명확하게 지정해야 합니다.
    Optional<Join> findByItem_ItemNameAndItem_StoreName(String itemName, String storeName);
}
