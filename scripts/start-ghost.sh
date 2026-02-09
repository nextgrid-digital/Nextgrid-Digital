#!/usr/bin/env bash
# Start Ghost locally with Docker. Run this from the project root or scripts folder.
# Prerequisite: Docker Desktop installed and running.

set -e
CONTAINER_NAME="ghost-nextgrid"
PORT=2368

if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
  echo "Starting existing Ghost container..."
  docker start "$CONTAINER_NAME"
else
  echo "Creating and starting Ghost container..."
  docker run -d --name "$CONTAINER_NAME" -p "${PORT}:2368" -e NODE_ENV=development ghost:latest
fi

echo ""
echo "Ghost is running at: http://localhost:${PORT}/ghost"
echo "Open that link in your browser to create your account and get the Content API key."
echo "Then paste the key into the .env file (see START_HERE.md)."
