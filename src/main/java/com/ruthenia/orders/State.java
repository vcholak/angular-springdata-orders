package com.ruthenia.orders;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class State extends AbstractEntity {

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String abbreviation;

    // The default constructor only exists for the sake of JPA.
    // You won’t use it directly, so it is designated as protected.
    protected State() {}

    public State(String name, String abbreviation) {
        this.name = name;
        this.abbreviation = abbreviation;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return String.format(
                "State[id=%d, name='%s', abbreviation='%s']",
                getId(), name, abbreviation);
    }
}
