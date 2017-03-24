package com.ruthenia.orders;

import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Vladimir on 2/21/2017.
 */
public interface CategoryRepository extends PagingAndSortingRepository<Category, Long> {
}
