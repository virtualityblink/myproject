import json

def file_read(file_name):
    with open(file_name, "r", encoding="utf-8") as file:
        return json.load(file)

def file_write(file_name, data):
    with open(file_name, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)

def file_create(file_name, data):
    with open(file_name, "x", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=2)