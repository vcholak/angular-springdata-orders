package com.ruthenia.orders;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;

@Entity
public class User extends AbstractEntity {

	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	@Column(nullable = false)
	private String username; // eg. email address

    @JsonIgnore
	private String password;

	@Autowired
    @Transient
	UserRepository userRepository;

	protected User() {} // only for JPA

    public User(String firstName, String lastName, String username) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.username = username;
    }

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

    public String getUsername() {
        return username;
    }

    public void validateUser(String userName) {
        this.userRepository.findByUsername(userName).orElseThrow(() -> new UserNotFoundException(userName));
    }
}
