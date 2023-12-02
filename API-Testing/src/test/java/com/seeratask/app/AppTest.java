package com.seeratask.app;

import static org.junit.Assert.assertEquals;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.http.ContentType;


import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    //  nid;
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        RestAssured.baseURI = "https://ae.almosafer.com";

        Response getResponse = RestAssured.get("/api/v3/flights/flight/search?query=RUH-DXB/2023-12-24/2023-12-29/Economy/1Adult");
        // Extract the required data from the GET response using JsonPath
        String jsonPath = getResponse.getBody().asString();

        // Send a POST request with the required data
        Response postResponse = RestAssured.given()
            .contentType(ContentType.JSON)
            .body(jsonPath)
            .post("/api/v3/flights/flight/async-search-result");

        // Get and print the response body and status code of the POST request
        JsonPath postResponseBody = postResponse.getBody().jsonPath();
        int postStatusCode = postResponse.getStatusCode();

        assertEquals(postResponseBody.get("res[0].status"), 400);
        assertEquals(postStatusCode, 200);
    }
}
