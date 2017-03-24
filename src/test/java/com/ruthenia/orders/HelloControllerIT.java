package com.ruthenia.orders;

//import static org.hamcrest.Matchers.contains;
//import static org.hamcrest.Matchers.equalTo;
//import static org.junit.Assert.assertThat;

import static org.assertj.core.api.Assertions.*;

import java.net.URL;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT) // The embedded server starts up on a random port
//TODO delete it
public class HelloControllerIT { // an integration test

    @LocalServerPort // actual port is discovered at runtime with the @LocalServerPort.
    private int port;

    private URL base;

    @Autowired // Tells the application context to inject an instance of TestRestTemplate bean here
    private TestRestTemplate template;

    @Before
    public void setUp() throws Exception {
        this.base = new URL("http://localhost:" + port + "/");
    }

    @Test
    public void getHello() throws Exception {
        ResponseEntity<String> response = template.getForEntity(base.toString(), String.class);
        //assertThat(response.getBody(), contains("Home"));
        assertThat(response.getBody()).contains("Home");
    }
}
