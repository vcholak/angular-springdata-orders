package com.ruthenia.orders;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by Vladimir on 2/7/2017.
 */
public interface OrderRepository extends PagingAndSortingRepository<Order, Long> {

    List<Order> findByCustomer(@Param("customer") Customer customer);

}
