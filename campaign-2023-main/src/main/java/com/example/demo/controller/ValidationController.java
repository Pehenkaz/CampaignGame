package com.example.demo.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/validation_schema")
public class ValidationController {
    @GetMapping
    public ResponseEntity<String> getValidationSchema() {
        String validationSchema = getValidationSchemaByRoomType();

        if (validationSchema != null) {
            return ResponseEntity.ok(validationSchema);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    private String getValidationSchemaByRoomType() {
        String res = "";
        res = "{" +
                "\"properties\": {" +
                "\"id\": {\"type\": \"integer\"}," +
                "\"title\": {\"type\": \"string\"}," +
                "\"count_players\": {\"type\": \"integer\"}," +
                "\"age_rating\": {\"type\": \"integer\"}," +
                "\"genre\": {\"type\": \"string\"}," +
                "\"count_hours\": {\"type\": \"number\"}," +
                "}," +
                "\"required\": [\"title\", \"count_players\", \"age_rating\", \"age_rating\", \"genre\", \"count_hours\"]" +
                "}";
        return res;
    }
}
