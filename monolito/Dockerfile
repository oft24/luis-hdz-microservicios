FROM node:18
WORKDIR /app
COPY . .
RUN npm install express mysql2 body-parser
EXPOSE 3000
CMD ["node", "app.py"]
