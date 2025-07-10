from fastapi import FastAPI
import uvicorn

from api_v1 import router as api_router
from core.config import settings

async def lifespan(app: FastAPI):
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(router=api_router, prefix=settings.api_v1_prefix)



@app.get("/")
def index():
    return {
        "message": "Server is working.",
    }