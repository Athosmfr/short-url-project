# 🔁 RedirectHandler - AWS Lambda (Redirect Short URL)

This is the **backend AWS Lambda function** responsible for handling redirection requests using a short code.  
It retrieves the original URL stored in an **Amazon S3** bucket and performs a redirect if the link is still valid.

It is part of the **Short URL** project, built with Java and integrated into a serverless architecture using **AWS Lambda** and **API Gateway**.

---

## 🧩 Functionality

- Accepts a `GET` request with the short code in the path.
- Retrieves the corresponding JSON file from an S3 bucket using the code.
- Checks if the link has **expired**:
  - If **valid**, responds with a `302` redirect to the original URL.
  - If **expired**, deletes the object from the bucket and responds with a `410 Gone` status.

---

## 📦 Example Request

- GET /1c3a8403 (302 Found)
- https://bla5n0fp6e.execute-api.us-east-1.amazonaws.com/

---

## 🛠️ Tech Stack
- Java 17
- AWS Lambda
- Amazon S3
- AWS API Gateway
