# Use a imagem oficial do Node.js
FROM node:14

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/backend

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Exponha a porta 4000
EXPOSE 4000

# Comando para iniciar a aplicação
CMD ["npm", "start"]  