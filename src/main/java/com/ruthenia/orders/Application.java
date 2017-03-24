package com.ruthenia.orders;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.util.Date;

/*
 @SpringBootApplication is a convenience annotation that adds all of the following:
 @Configuration tags the class as a source of bean definitions for the application context.
 @EnableAutoConfiguration tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.
 Normally you would add @EnableWebMvc for a Spring MVC app, but Spring Boot adds it automatically when it sees spring-webmvc on the classpath. This flags the application as a web application and activates key behaviors such as setting up a DispatcherServlet.
 @ComponentScan tells Spring to look for other components, configurations, and services in the the com.ruthenia.orders package, allowing it to find the controllers.

 Spring Data REST builds on top of Spring MVC. It creates a collection of Spring MVC controllers, JSON converters, and other beans needed to provide a RESTful front end.
 These components link up to the Spring Data JPA backend. Using Spring Boot this is all auto-configured.
*/
@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner data(StateRepository states, CustomerRepository customers,
                                  CategoryRepository categories, ProductRepository products, UserRepository users,
                                  OrderItemRepository items, OrderRepository orders) {
        return (args) -> {
            State al = states.save(new State("Alabama", "AL"));
            State az = states.save(new State("Arizona", "AZ"));
            State ca = states.save(new State("California", "CA"));
            State ct = states.save(new State("Connecticut", "CT"));
            State co = states.save(new State("Colorado", "CO"));
            State fl = states.save(new State("Florida", "FL"));
            State hi = states.save(new State("Hawaii", "HI"));
            State mi = states.save(new State("Michigan", "MI"));
            State nj = states.save(new State("New Jersey", "NJ"));
            State nm = states.save(new State("New Mexico", "NM"));
            State ny = states.save(new State("New York", "NY"));
            State nc = states.save(new State("North Carolina", "NC"));
            State or = states.save(new State("Oregon", "OR"));
            State tx = states.save(new State("Texas", "TX"));
            State ut = states.save(new State("Utah", "UT"));
            State wa = states.save(new State("Washington", "WA"));
            State wv = states.save(new State("West Virginia", "WV"));

            State state = states.findByAbbreviation("NC");
            log.info("State found with findByAbbreviation('NC'):");
            log.info("--------------------------------");
            log.info(state.toString());
            log.info("");

            // save some customers
            Customer customer = new Customer("Jack", "Bauer");
            customer.setAddress("250 Shelbourne Road");
            customer.setCity("Birmingham");
            customer.setState(al);
            customer.setZipCode(35201);
            customers.save(customer);

            customer = new Customer("Chloe", "O'Brian");
            customer.setAddress("45020 Aviation Drive");
            customer.setCity("Phoenix");
            customer.setState(az);
            customer.setZipCode(85001);
            customers.save(customer);

            customer = new Customer("Kim", "Bauer");
            customer.setAddress("6000 North Terminal Parkway");
            customer.setCity("Sacramento");
            customer.setState(ca);
            customer.setZipCode(95801);
            customers.save(customer);

            customer = new Customer("David", "Palmer");
            customer.setAddress("300 Hangar Center");
            customer.setCity("Bridgeport");
            customer.setState(ct);
            customer.setZipCode(06601);
            customers.save(customer);

            customer = new Customer("Michelle", "Dessler");
            customer.setAddress("10 Harboreside Drive");
            customer.setCity("Denver");
            customer.setState(co);
            customer.setZipCode(80239);
            customers.save(customer);

            // fetch all customers
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (Customer cust : customers.findAll()) {
                log.info(cust.toString());
            }
            log.info("");

            // fetch an individual customer by ID
            Customer customer1 = customers.findOne(1L);
            log.info("Customer found with findOne(1L):");
            log.info("--------------------------------");
            log.info(customer1.toString());
            log.info("");

            // fetch customers by last name
            log.info("Customer found with findByLastName('Bauer'):");
            log.info("--------------------------------------------");
            for (Customer bauer : customers.findByLastName("Bauer")) {
                log.info(bauer.toString());
            }
            log.info("");

            Category watersports = categories.save(new Category("Watersports"));
            Category soccer = categories.save(new Category("Soccer"));
            Category chess = categories.save(new Category("Chess"));
            Category bicycle = categories.save(new Category("Bicycle"));

            Product kayak = new Product("Kayak", new BigDecimal(275.00), "A boat for one person", watersports);

            products.save(kayak);
            products.save(new Product("Life Jacket", new BigDecimal(48.95), "Protective and fashionable", watersports));
            products.save(new Product("Soccer Ball", new BigDecimal(19.50), "FIFA-approved size and weight", soccer));
            products.save(new Product("Corner Flags", new BigDecimal(34.95), "Give your playing field a professional look", soccer));
            products.save(new Product("Stadium", new BigDecimal(795000.00), "Flat-packed 35,000-seat stadium", soccer));
            products.save(new Product("Thinking Cap", new BigDecimal(16.00), "Improve your brain efficiency by 75%", chess));
            products.save(new Product("Unsteady Chair", new BigDecimal(29.95), "Secretly give your opponent a disadvantage", chess));
            products.save(new Product("Human Chess Board", new BigDecimal(75.00), "A fun game for the family", chess));
            products.save(new Product("Sedona DX", new BigDecimal(420.00), "A bike with an aluminum frame", bicycle));

            User salesRep = new User("sales", "representative", "SalesRep");
            users.save(salesRep);

            Order order = orders.save(new Order(customer1, new Date(), salesRep));
            assert orders.count() == 1;
            assert order.getId() == 1;

            OrderItem item = new OrderItem(order, kayak, 1);
            items.save(item);

            order.addItem(item);
            orders.save(order);
        };
    }
}