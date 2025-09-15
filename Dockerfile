# Usa uma imagem oficial do Node.js, mais completa para desenvolvimento
FROM node:22

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependência primeiro para aproveitar o cache
# Esta camada só será reconstruída se você adicionar ou remover pacotes
COPY package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Expõe a porta de desenvolvimento do Vite
EXPOSE 5173

# Comando padrão para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev"]
