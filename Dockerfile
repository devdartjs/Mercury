# Imagem base com Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Build do projeto
RUN npm run build

# Instala um servidor estático globalmente
RUN npm install -g serve

# Expõe a porta usada pelo `serve`
EXPOSE 3000

# Comando para servir o build
CMD ["serve", "-s", "dist", "-l", "3000"]
