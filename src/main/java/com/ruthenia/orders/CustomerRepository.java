package com.ruthenia.orders;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

// You don’t have to write an implementation of the repository interface.
// Spring Data JPA creates an implementation on the fly when you run the application.
// @RepositoryRestResource is not required for a repository to be exported. It is only used to change the export details, such as using /people instead of the default value of /persons.
//@RepositoryRestResource(collectionResourceRel = "customers", path = "customers")
public interface CustomerRepository extends PagingAndSortingRepository<Customer, Long> {

    // custom methods

    /*
     This method will create a JPA query of the form select c from Customer c where c.lastName = :lastName,
     run it (passing in the method argument lastName as a named parameter for the query), and return the results for us.
     */
    List<Customer> findByLastName(@Param("lastName") String lastName);

    Optional<Customer> findByEmailAddress(@Param("emailAddress") String emailAddress);

    //TODO Customer findByEmailAddress(@Param("emailAddress") EmailAddress emailAddress);
}
