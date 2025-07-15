import aioboto3
import uuid

BUCKET_NAME = "media"
ENDPOINT_URL = "http://localhost:9000"
AWS_ACCESS_KEY_ID = "admin"
AWS_SECRET_ACCESS_KEY = "password123"

session = aioboto3.Session()


async def upload_file_to_s3(file_content: bytes, file_id: int, content_type: str):
    unique_name = f"{uuid.uuid4()}_{file_id}"

    async with session.client(
        "s3",
        endpoint_url=ENDPOINT_URL,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    ) as s3:
        await s3.put_object(
            Bucket=BUCKET_NAME,
            Key=unique_name,
            Body=file_content,
            ContentType=content_type,
            ACL="public-read",
        )

    return {
        "url": f"{ENDPOINT_URL}/{BUCKET_NAME}/{unique_name}",
        "unique_name": unique_name,
    }


async def delete_file_from_s3(key: str) -> bool:
    try:
        async with session.client(
            "s3",
            endpoint_url=ENDPOINT_URL,
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        ) as s3:
            await s3.delete_object(Bucket=BUCKET_NAME, Key=key)
        return True
    except Exception as e:
        print(e)
        return False
