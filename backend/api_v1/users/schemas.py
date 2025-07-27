from pydantic import (
    BaseModel,
    EmailStr,
    Field,
    ConfigDict,
    field_validator,
    model_validator,
)


class UserBase(BaseModel):
    name: str = Field(max_length=50)
    surname: str = Field(max_length=50)
    patronymic: str = Field(max_length=50)
    email: EmailStr = Field(min_length=5)
    phone_number: str = Field(max_length=30)

    model_config = ConfigDict(from_attributes=True)

    


class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=30)
    password_confirm: str = Field(min_length=8, max_length=30)

    @field_validator("password")
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError("Пароль слишком короткий")
        if not (any(c.isalpha() for c in v) and any(c.isdigit() for c in v)):
            raise ValueError("Пароль должен содержать буквы и цифры")
        return v

    @model_validator(mode="after")
    def check_passwords_match(self):
        if self.password != self.password_confirm:
            raise ValueError("Пароли не совпадают")
        return self