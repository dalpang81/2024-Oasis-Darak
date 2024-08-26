package com.darak.backend.Join.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
public class JoinResponseDto {
    private String itemName;
    private String storeName;
    private int joinPrice;
    private int joinLimit;
    private int joinPersonCount;
    private int joinPercent;
    private String joinStartDay;
    private String joinEndDay;
}
