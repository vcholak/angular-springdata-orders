package com.ruthenia.orders;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface StateRepository extends PagingAndSortingRepository<State, Long> {

    State findByAbbreviation(@Param("abbreviation") String abbreviation);
}
