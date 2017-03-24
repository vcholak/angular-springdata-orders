package com.ruthenia.orders;

import org.aspectj.weaver.ast.Or;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class OrderRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    OrderRepository repository;

    @Test
    public void findById() {
        Customer customer = new Customer();
        User salesRep = new User();
        Order order = new Order(customer, new Date(), salesRep);
        Order entity = entityManager.persist(order);
        Order persisted = repository.findOne(entity.getId());

        assertThat(persisted.getId()).isEqualTo(entity.getId());
    }

    @Test
    public void findByCustomer() {
        Customer customer = new Customer("firstN", "lastN");
        entityManager.persist(customer);

        User salesRep = new User("Alex", "Munich", "defaultUser");
        entityManager.persist(salesRep);

        Order order = new Order(customer, new Date(), salesRep);
        entityManager.persist(order);

        List<Order> orders = repository.findByCustomer(customer);
        assertThat(orders.size()).isEqualTo(1);
        assertThat(orders.get(0).getCustomer()).isEqualTo(customer);
    }
}
