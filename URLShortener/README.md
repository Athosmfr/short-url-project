# ☁️ URLShortener - AWS Lambda (Create Short URL)

This is the **backend AWS Lambda function** responsible for generating a unique short code (UUID) and storing the original URL along with its expiration time into an **Amazon S3** bucket.

It is part of the **Short URL** project, built with Java and integrated into a serverless architecture using **AWS Lambda** and **API Gateway**.

---

## 🧩 Functionality

- Accepts a `POST` request containing the original URL as the expiration timestamp is set to 3 days.
- Generates a unique identifier (UUID) as a short code.
- Stores the URL and its expiration time as a JSON object in an S3 bucket.
- Returns the generated code as a JSON response.

---

## 📦 Example Request

```json
POST /create
Content-Type: application/json

{
  "url": "https://example.com"
}
```

## 🛠️ Tech Stack
- Java 17
- AWS Lambda
- Amazon S3
- AWS API Gateway
