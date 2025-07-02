# 🚀 Crear un nuevo proyecto desde un repositorio base (por terminal)

Este documento explica cómo clonar un repositorio base en GitHub y reutilizarlo como punto de partida para un nuevo proyecto, eliminando el historial anterior e inicializando un repositorio nuevo.

---

## 📦 Requisitos previos

- Tener Git instalado.
- Tener una cuenta en [GitHub](https://github.com).
- Haber creado (o tener acceso a) un repositorio base público o privado.
- Crear un repositorio vacío en GitHub con el nombre del nuevo proyecto (ej: `mi-negocio-app`).

---

## 🛠️ Pasos

### 1. Clona el repositorio base con un nuevo nombre local

```bash
git clone https://github.com/usuario/repo-base.git mi-negocio-app
```

> Esto descarga el contenido del repositorio `repo-base` y lo guarda en una nueva carpeta llamada `mi-negocio-app`.

---

### 2. Entra en el nuevo directorio

```bash
cd mi-negocio-app
```

---

### 3. Elimina el historial Git anterior

```bash
rm -rf .git
```

> Esto borra el historial de Git del repositorio base para que puedas empezar con un historial limpio.

---

### 4. Inicializa un nuevo repositorio Git

```bash
git init
```

---

### 5. Agrega tu nuevo repositorio en GitHub como remoto

Primero, crea un nuevo repositorio vacío en GitHub:  
👉 [https://github.com/new](https://github.com/new)

Luego, vincúlalo:

```bash
git remote add origin https://github.com/tu-usuario/mi-negocio-app.git
```

---

### 6. Realiza el primer commit

```bash
git add .
git commit -m "Proyecto inicial basado en repo-base"
```

---

### 7. Sube tu nuevo proyecto a GitHub

```bash
git branch -M main
git push -u origin main
```

---

## ✅ Resultado

Ahora tienes un nuevo repositorio en GitHub (`mi-negocio-app`) que parte del código del repositorio base, pero con historial completamente nuevo. Puedes empezar a desarrollar tu proyecto sin arrastrar el historial anterior.

---

## 📝 Notas

- Este proceso **no conserva los commits, ramas ni tags** del repositorio original.
- Si quieres conservar esos elementos, deberías hacer un fork o trabajar con ramas directamente.
