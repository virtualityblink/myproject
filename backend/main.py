from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from modules.cwrjson import file_create, file_write, file_read

app = FastAPI()

data_path = "data/users.json"

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://myproject-1-xdev.onrender.com"
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    users = file_read(data_path)
    print("Файл", data_path, "підключено.")
except FileNotFoundError:
    users = []
    file_create(data_path, users)
    print("Файл", data_path, "створено.")

@app.get("/getusers")
async def get_users():
    users = file_read(data_path)
    return users
