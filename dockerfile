# ========== Development Stage ==========
FROM node:22-alpine AS dev

WORKDIR /usr/src/backend

# Install dependencies (cached layer)
COPY package.json package-lock.json ./
RUN npm install

# Copy app files
COPY . .

# Option 1: Use nodemon (uncomment if preferred)
# RUN npm install -g nodemon
# CMD ["nodemon", "--inspect=0.0.0.0", "server.js"]

# Option 2: Use native Docker watch (recommended)
CMD ["node", "--inspect=0.0.0.0", "server.js"]

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