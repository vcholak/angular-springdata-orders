package com.ruthenia.orders;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest()
public class ApplicationTests {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setUp() {
        mvc = MockMvcBuilders.webAppContextSetup(this.context).build();
    }

    @Test
    public void testHome() throws Exception {
        mvc.perform(get("/api")).andExpect(status().isOk()).andExpect(content().string(containsString("_links")));
    }

    @Test
    public void findCategories() throws Exception {

        this.mvc.perform(
                get("/api/categories"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("_embedded.categories", hasSize(4)));
    }

    @Test
    public void findByProducts() throws Exception {

        this.mvc.perform(
                get("/api/products"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("_embedded.products", hasSize(9)));
    }

    @Test
    public void findUsers() throws Exception {

        this.mvc.perform(
                get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("_embedded.users", hasSize(1)));
    }
}
