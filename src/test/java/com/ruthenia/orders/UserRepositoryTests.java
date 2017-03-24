package com.ruthenia.orders;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    UserRepository repository;

    String firstName = "Bob";
    String lastName = "McGwire";
    String username = "defaultUser";
    User user = new User(firstName, lastName, username);

    @Test
    public void findById() {
        User entity = entityManager.persist(user);
        User persisted = repository.findOne(entity.getId());

        assertThat(persisted.getLastName()).isEqualTo(lastName);
    }

    @Test
    public void findByLastName() {
        entityManager.persist(user);
        List<User> users = repository.findByLastName(lastName);

        assertThat(users.size()).isEqualTo(1);
        assertThat(users.get(0).getLastName()).isEqualTo(lastName);
    }

    @Test
    public void findByUsername() {
        entityManager.persist(user);
        Optional<User> persisted = repository.findByUsername(username);

        assertThat(persisted.get().getUsername()).isEqualTo(username);
    }
}
