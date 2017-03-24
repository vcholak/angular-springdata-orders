package com.ruthenia.orders;

import org.springframework.util.Assert;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Set;

@Entity
public class Category extends AbstractEntity {

    @Column(nullable = false)
    private String name;

    @OneToOne
    private Category parent;

    @OneToMany(mappedBy = "category")
    private Set<Product> products;

    protected Category() {} // only for JPA

    public Category(String name, Category parent) {
        Assert.hasText(name, "Name must not be null or empty!");

        this.name = name;
        this.parent = parent;
    }

    public Category(String name) {
        this(name, null);
    }

    public String getName() {
        return name;
    }

    public boolean add(Product product) {
        return products.add(product);
    }

    public boolean delete(Product product) {
        return products.remove(product);
    }

    public Set<Product> getProducts() {
        return products;
    }

    public Category getParent() {
        return parent;
    }

    public void setParent(Category parent) {
        this.parent = parent;
    }
}
