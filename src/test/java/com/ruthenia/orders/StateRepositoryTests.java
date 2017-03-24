package com.ruthenia.orders;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class StateRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    StateRepository repository;

    String name = "South Carolina";
    String abbreviation = "SC";
    State state = new State(name, abbreviation);

    @Test
    public void findsFirstPageOfStates() {
        Page<State> states = repository.findAll(new PageRequest(0, 10));

        assertThat(states.getTotalElements()).isGreaterThan(15L);
    }

    @Test
    public void findById() {
        State entity = entityManager.persist(state);
        State persisted = repository.findOne(entity.getId());

        assertThat(persisted.getName()).isEqualTo(name);
    }

    @Test
    public void findByAbbreviation() {
        entityManager.persist(state);
        State persisted = repository.findByAbbreviation(abbreviation);

        assertThat(persisted.getName()).isEqualTo(name);
    }

}
