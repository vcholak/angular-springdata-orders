package com.ruthenia.orders;

import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Vladimir on 2/7/2017.
 */
public interface OrderItemRepository extends PagingAndSortingRepository<OrderItem, Long> {
}
