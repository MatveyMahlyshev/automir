from fastapi import FastAPI
import uvicorn


app = FastAPI()

@app.get("/")
def index():
    return {"message": "Server is working.",}

if __name__ == "__main__":
    uvicorn.run(app="main:app", reload=True)