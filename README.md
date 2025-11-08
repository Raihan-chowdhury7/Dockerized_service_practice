# Node.js Docker Practice App

This project was created as a personal exercise while learning the fundamentals of Docker and Dockerfiles.

---

## Purpose

The aim of this project was to understand how Docker works by containerising a simple Node.js application.  
It helped me explore how Docker builds images, runs containers, and manages environment variables and ports.

Through this exercise, I learnt how to:
- Write and understand a basic **Dockerfile**
- Use key instructions such as `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, and `CMD`
- Build Docker images using `docker build`
- Run containers locally with `docker run`
- Map ports and use `.env` files for configuration

The application itself is deliberately simple — a small Node.js server with two routes — so the focus remained on learning Docker rather than application logic.

---

## What I Practised

- Setting up a Node.js project for containerisation
- Building and running Docker containers locally
- Understanding image layers and caching
- Managing environment variables securely in Docker
- Gaining confidence in reading and writing Dockerfiles

---

## Next Steps

Possible future improvements or extensions include:
- Pushing the image to a container registry such as Docker Hub or ECR  
- Deploying the container to a cloud environment  
- Automating the build and deployment process with GitHub Actions  

