package com.ruthenia.orders;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
// For lack of a @Table annotation, it is assumed that this entity will be mapped to a table named Customer
public class Customer extends AbstractEntity {

    @Column(unique = true)
    private String emailAddress;

    @Column(nullable = false)
    private String firstName; // it’ll be mapped to columns that share the same name

    @Column(nullable = false)
    private String lastName;  // it’ll be mapped to columns that share the same name

    private String address;
    private String address2;

    private String city;

    @ManyToOne
    private State state;

    private Integer zipCode;

    // Each Customer may have no, one, or many Order entities. This is a 1:N relationship.
    @OneToMany(mappedBy = "customer")
    private Set<Order> orders = new HashSet<>();

    // The default constructor only exists for the sake of JPA.
    // You won’t use it directly, so it is designated as protected.
    protected Customer() {}

    public Customer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, firstName='%s', lastName='%s']",
                getId(), firstName, lastName);
    }

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getZipCode() {
        return zipCode;
    }

    public void setZipCode(Integer zipCode) {
        this.zipCode = zipCode;
    }

    public Set<Order> getOrders() {
        return orders;
    }
}
