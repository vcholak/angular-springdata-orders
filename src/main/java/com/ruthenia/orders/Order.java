package com.ruthenia.orders;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Orders") // to prevent Syntax error because ORDER is a keyword in SQL
public class Order extends AbstractEntity {

    private Date date;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private User salesRep;

    @OneToMany(mappedBy = "order")
    private Set<OrderItem> items = new HashSet<>();

    protected Order() { // only for JPA
    }

    public Order(Customer customer, Date date, User salesRep) {
        this.customer = customer;
        this.date = date;
        this.salesRep = salesRep;
    }

    public Date getDate() {
        return date;
    }

    public User getSalesRep() {
        return salesRep;
    }

    public Customer getCustomer() {
        return customer;
    }

    public Set<OrderItem> getItems() {
        return items;
    }

    public boolean addItem(OrderItem item) {

        return items.add(item);
    }

    public int getItemsCount() {
        int count = 0;
        for(OrderItem item : items) {
            count += item.getAmount();
        }
        return  count;
    }

    public BigDecimal getTotal() {

        BigDecimal total = BigDecimal.ZERO;

        for(OrderItem item : items) {
            total = total.add(item.getSubTotal());
        }
        return total;
    }
}
