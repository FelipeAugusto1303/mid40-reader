# Use a imagem oficial do Node.js com versão desejada
FROM node:18

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/frontend

# Copie os arquivos package.json e yarn.lock (ou package-lock.json) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Construa o aplicativo React
RUN npm run build

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo (ajuste conforme necessário)
CMD ["npm", "run", "serve","--","--port","3000","--host","0.0.0.0"]
