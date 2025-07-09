FROM python:3.12-slim

WORKDIR /backend

# Устанавливаем Poetry
RUN pip install --no-cache-dir poetry

# Копируем только файлы зависимостей
COPY pyproject.toml poetry.lock ./

# Устанавливаем зависимости в виртуальное окружение
RUN poetry config virtualenvs.create true \
    && poetry config virtualenvs.in-project true \
    && poetry install --no-root

# Копируем остальные файлы
COPY . .

EXPOSE 8000

# Указываем путь к Python из виртуального окружения
CMD [".venv/bin/python3.12", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]