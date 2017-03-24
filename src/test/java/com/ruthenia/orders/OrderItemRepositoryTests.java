package com.ruthenia.orders;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class OrderItemRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private OrderItemRepository repository;

    @Test
    public void test1() {
        Order order = new Order();
        Product product = new Product();

        OrderItem item = new OrderItem(order, product, 10);
        OrderItem entity = entityManager.persist(item);
        OrderItem stored = repository.findOne(entity.getId());

        assertThat(stored.getAmount()).isEqualTo(10);
    }
}
