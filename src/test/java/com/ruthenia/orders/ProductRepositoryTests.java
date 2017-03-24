package com.ruthenia.orders;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ProductRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    ProductRepository repository;

    String productName = "Test Game";
    Product product;
    Category category;

    @Before
    public void setUp() {
        category = new Category("Video Games");
        product = new Product(productName, new BigDecimal(200.00), "Awesome product", null);
    }

    @Test
    public void findById() {
        Category cat = entityManager.persist(category);
        product.setCategory(cat);
        Product prod = entityManager.persist(product);

        Product persisted = repository.findOne(prod.getId());
        assertThat(persisted.getId()).isEqualTo(prod.getId());
    }

    @Test
    public void findByDescriptionContaining() {
        Category cat = entityManager.persist(category);
        product.setCategory(cat);
        entityManager.persist(product);

        Pageable pageable = mock(Pageable.class); // mocking the Pageable interface

        Page<Product> products = repository.findByDescriptionContaining("Awesome", pageable);
        assertThat(products.getTotalElements()).isEqualTo(1);
        assertThat(products.getContent().get(0).getName()).isEqualTo(productName);
    }
}
