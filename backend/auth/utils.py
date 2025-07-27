import bcrypt


def hash_password(password: str) -> bytes:
    salt = bcrypt.gensalt()
    pwd_bytes: bytes = password.encode()
    hashed: bytes = bcrypt.hashpw(password=pwd_bytes, salt=salt)
    return hashed.decode("utf-8")
