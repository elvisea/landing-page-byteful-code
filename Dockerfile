# Etapa de construção (Build)
FROM node:22 AS builder

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto
COPY . .

# Compila a aplicação Next.js
RUN npm run build

# Expõe a porta em que o Next.js irá rodar
EXPOSE 3002

# Comando para iniciar a aplicação em modo de produção
CMD ["npm", "start"]
