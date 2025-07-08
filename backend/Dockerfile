FROM python:3.12-slim

RUN pip install --no-cache-dir poetry

ENV POETRY_VIRTUALENVS_CREATE=false POETRY_NO_INTERACTION=1

WORKDIR /backend

COPY pyproject.toml poetry.lock ./

RUN poetry install --no-root

COPY . .

EXPOSE 8000

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
