# ========== Development Stage ==========
FROM node:22-alpine AS dev

WORKDIR /usr/src/backend

# Install dependencies (cached layer)
COPY package.json package-lock.json ./
RUN npm install

# Copy app files
COPY . .

CMD ["npm", "run", "dev"]

# ========== Production Stage ==========
FROM node:22-alpine AS prod

WORKDIR /usr/src/backend

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copy app files
COPY . .

# Cleanup
RUN rm -rf src/validators test

# Non-root user
RUN adduser -D appuser && chown -R appuser /usr/src/backend
USER appuser

EXPOSE 3000
CMD ["node", "server.js"]