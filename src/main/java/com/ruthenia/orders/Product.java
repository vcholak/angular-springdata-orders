package com.ruthenia.orders;

import org.springframework.util.Assert;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Product extends AbstractEntity {

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    @ManyToOne
    private Category category;

    public Product(String name, BigDecimal price, String description, Category category) {
        Assert.hasText(name, "Name must not be null or empty!");
        Assert.isTrue(BigDecimal.ZERO.compareTo(price) < 0, "Price must be greater than zero!");

        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
    }

    public Product(String name, BigDecimal price) {
        this(name, price, null, null);
    }

    protected Product() { // only for JPA
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
