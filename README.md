# 🗂️ Repositorio legado – Little Lemon (Curso 7)

Este repositorio contiene una versión anterior del proyecto **Little Lemon**, desarrollada durante el Curso 7. Originalmente incluía tanto el frontend como el backend en una sola estructura.

## ⚠️ Estado actual

Este repositorio ha sido **reemplazado por dos repositorios separados** para facilitar el despliegue y mantenimiento:

- 🔙 [Little Lemon Backend](https://github.com/BaltazarCaceres/little-lemon-backend)
- 🔜 [Little Lemon Frontend](https://github.com/BaltazarCaceres/little-lemon-frontend)

## 🧠 ¿Por qué se separó?

Render requiere configuraciones distintas para proyectos de frontend (React) y backend (Node.js). Separarlos permite:

- Desplegar el frontend como Static Site
- Ejecutar el backend como Web Service
- Mantener una estructura más limpia y profesional

## 📁 Estructura original

curso-7/ ├── client/ # Frontend (React) ├── controllers/ # Backend (Node.js) ├── models/ ├── routes/ ├── public/ ├── src/ ├── server.js ├── package.json └── render.yaml
