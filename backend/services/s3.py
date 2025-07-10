import boto3
import uuid

s3 = boto3.client(
    "s3",
    endpoint_url="http://localhost:9000",
    aws_access_key_id="admin",
    aws_secret_access_key="password123",
)

BUCKET_NAME = "media"


def upload_file_to_s3(file_content: bytes, filename: str, content_type: str) -> str:
    unique_name = f"{uuid.uuid4()}_{filename}"
    s3.put_object(
        Bucket=BUCKET_NAME, Key=unique_name, Body=file_content, ContentType=content_type
    )
    return f"http://localhost:9000/{BUCKET_NAME}/{unique_name}"
