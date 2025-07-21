package com.athosmfr.urlShortener;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class CreateShortenerURL implements RequestHandler<Map<String, Object>, Map<String, String>> {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final S3Client s3Client = S3Client.builder().build();
    private final static String BUCKET_NAME = System.getenv("BUCKET_NAME");

    @Override
    public Map<String, String> handleRequest(Map<String, Object> input, Context context) {

        String bodyData = input.get("body").toString();

        Map<String, String> bodyMapping;
        try {
            bodyMapping = objectMapper.readValue(bodyData, Map.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error parsing JSON data :" + e);
        }

        String sourceUrl = bodyMapping.get("url");

        try {
            new URL(sourceUrl);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Invalid URL");
        }

        // String expirationDate = bodyMapping.get("expiration");

        //long expirationInSeconds = Long.parseLong(expirationDate) * 3600;
        long expirationInSeconds = (System.currentTimeMillis() / 1000) + (72 * 3600);

        String urlCode = UUID.randomUUID().toString().substring(0, 8);

        URLData urlData = new URLData(sourceUrl, expirationInSeconds);

        try {
            // Transformando o urlData em um JSON novamente
            String data = objectMapper.writeValueAsString(urlData);

            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(BUCKET_NAME)
                    .key(urlCode + ".json")
                    .build();

            s3Client.putObject(putObjectRequest, RequestBody.fromString(data));

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        Map<String, String> response = new HashMap<>();
        response.put("code", urlCode);

        return response;
    }
}