from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

from api_v1 import router as api_router
from core.config import settings


async def lifespan(app: FastAPI):
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(router=api_router, prefix=settings.api_v1_prefix)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://192.168.0.7:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def index():
    return {
        "message": "Server is working.",
    }


if __name__ == "__main__":
    uvicorn.run(app="main:app")
