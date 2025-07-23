from pydantic import BaseModel
from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()



class DBSettings(BaseModel):
    url: str = "postgresql+asyncpg://automir:automir@localhost:5432/automir_db"
    echo: bool = False


class Settings(BaseSettings):
    db: DBSettings = DBSettings()
    api_v1_prefix: str = "/api/v1"
    S3_ACCESS_KEY: str
    S3_SECRET_KEY: str
    S3_ENDPOINT_URL: str
    S3_REGION: str
    S3_BUCKET_NAME: str
    S3_BUCKET_ID: str

    class Config:
        env_file = ".env"



settings = Settings()
