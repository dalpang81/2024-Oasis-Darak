package com.darak.backend.Join.entity;


import com.darak.backend.Item.entity.Item;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@Table(name = "JOINS")
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(joinId.class)
public class Join {
    @Id
    @Column(name = "item_name")
    private String itemName;

    @Id
    @Column(name = "store_name")
    private String storeName;

    @ManyToOne
    @MapsId
    @JoinColumns({
            @JoinColumn(name = "item_name", referencedColumnName = "item_name"),
            @JoinColumn(name = "store_name", referencedColumnName = "store_name")
    })
    private Item item;

    @Column(name = "join_price")
    private int joinPrice;

    @Column(name = "join_limit")
    private int joinLimit;

    @Column(name = "join_people_count")
    private int joinPeopleCount;

    @Column(name = "join_percent")
    private int joinPercent;

    @Column(name = "join_start_day")
    private String joinStartDay;

    @Column(name = "join_end_day")
    private String joinEndDay;

    public void changeJoinPeopleCount(int newJointPeopleCount) {
        this.joinPeopleCount = newJointPeopleCount;
    }
}
