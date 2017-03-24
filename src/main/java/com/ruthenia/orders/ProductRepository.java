package com.ruthenia.orders;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

    Page<Product> findByDescriptionContaining(@Param("description") String description, Pageable pageable);
}
