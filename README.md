# Node.js Docker Practice App

A small practice project created to learn the basics of Docker by containerising a simple Node.js web application.

---

## Project Overview

This project contains a minimal **Node.js** application with two routes:

- `/` – returns **"Hello, world!"**
- `/secret` – protected with **Basic Authentication**, returns a secret message stored in `.env`

The purpose of this project is to understand how to:
1. Write a simple Node.js app
2. Create a `Dockerfile` to build and run the app inside a container
3. Run and test the container locally using Docker

---

## Project Structure

