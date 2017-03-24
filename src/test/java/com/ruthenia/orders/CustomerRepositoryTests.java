package com.ruthenia.orders;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CustomerRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CustomerRepository repository;

    Customer customer;

    @Before
    public void setUp() {
        customer = new Customer("Bob", "Dirack");
    }

    @Test
    public void findById() {
        Customer entity = entityManager.persist(customer);
        Customer customer = repository.findOne(entity.getId());

        assertThat(customer.getFirstName()).isEqualTo("Bob");
    }

    @Test
    public void findByLastName() {
        entityManager.persist(customer);
        List<Customer> customers = repository.findByLastName("Dirack");

        assertThat(customers.size()).isEqualTo(1);
        assertThat(customers.get(0).getLastName()).isEqualTo("Dirack");
    }

}
