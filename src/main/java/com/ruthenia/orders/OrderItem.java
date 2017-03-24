package com.ruthenia.orders;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.util.Assert;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class OrderItem extends AbstractEntity {

    @ManyToOne
    private Order order;

    @ManyToOne
    private Product product;

    private int amount;

    protected OrderItem() { // only for JPA
    }

    public OrderItem(Order order, Product product, int amount) {
        Assert.notNull(order, "The given Order must not be null!");
        Assert.notNull(product, "The given Product must not be null!");
        Assert.isTrue(amount > 0, "The amount of Products to be bought must be greater than 0!");

        this.order = order;
        this.product = product;
        this.amount = amount;
    }

    public OrderItem(Order order, Product product) {
        this(order, product, 1);
    }

    public Order getOrder() {
        return order;
    }

    public Product getProduct() {
        return product;
    }

    public int getAmount() {
        return amount;
    }

    @JsonIgnore
    public BigDecimal getSubTotal() {
        return BigDecimal.valueOf(amount).multiply(product.getPrice());
    }
}
