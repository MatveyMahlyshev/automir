FROM node:18-alpine

WORKDIR /frontend

# Копируем только файлы зависимостей сначала
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Указываем порт
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]