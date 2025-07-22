import aioboto3
import uuid
from botocore.exceptions import ClientError
from fastapi import HTTPException, status

from core.config import settings

ACCESS_KEY = settings.S3_ACCESS_KEY
SECRET_KEY = settings.S3_SECRET_KEY
REGION = settings.S3_REGION
URL = settings.S3_ENDPOINT_URL
BUCKET = settings.S3_BUCKET_NAME
BUCKET_ID = settings.S3_BUCKET_ID


async def upload_file_to_s3(file_content: bytes, file_id: int, content_type: str):
    unique_name = f"{uuid.uuid4()}_{file_id}"
    try:
        session = aioboto3.Session(
            aws_access_key_id=ACCESS_KEY,
            aws_secret_access_key=SECRET_KEY,
            region_name=REGION,
        )
        async with session.client("s3", endpoint_url=URL, verify=False) as s3:
            await s3.upload_fileobj(
                file_content,
                BUCKET,
                unique_name,
                ExtraArgs={"ContentType": content_type},
            )
            return {
                "url": f"https://{BUCKET_ID}.selstorage.ru/{unique_name}",
                "unique_name": unique_name,
            }

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e)
        )
    return False
