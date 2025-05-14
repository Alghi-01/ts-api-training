# 🚀 TypeScript Express API Boilerplate

Boilerplate project untuk belajar membuat REST API menggunakan Express.js + TypeScript + Supabase PostgreSQL + Prisma.

🧭 Cakupan Materi

Materi yang akan dipelajari dalam praktik ini:

- Setup Project Express.js + TypeScript
- Prisma Setup & PostgreSQL (Supabase)
- TypeScript Types & Interfaces
- Function Declaration vs Expression vs Arrow Function
- Async/Await & Destructuring
- Classes & OOP Style in TypeScript
- Type Guards & Function Overloading
- Generic Functions
- Error Handling Terstruktur
- Implementasi CRUD User Management + Auth

---

## 🛠 Persiapan Awal

### 1. Install Aplikasi

Pastikan kamu sudah menginstall:

- [Node.js](https://nodejs.org/) (versi terbaru LTS)
- [Git](https://git-scm.com/)

### 2. Install Dependencies Global

```bash
npm install -g prisma
npm install -g tsc
```

### 3. Buat Akun Supabase

1. Daftar di [supabase.com](https://supabase.com)
2. Buat project baru
3. Catat kredensial berikut dari halaman Settings → Database:

   - DB URL (untuk `.env`)
   - Username, password, host, port, dan nama database jika ingin konfig manual

### 4. Setup Prisma

1. Generate `schema.prisma`:

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id       String   @id @default(uuid())
  name     String
  email    String   @unique
  password String
  createdAt DateTime @default(now())
}
```

2. Buat file `.env`:

```env
DATABASE_URL="postgresql://username:password@host:port/dbname"
PORT=3000
```

3. Jalankan perintah berikut:

```bash
npx prisma generate
npx prisma db push
```

---

## 📁 Struktur Project

```
ts-user-api/
├── src/
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── middlewares/
│   │   └── error.middleware.ts
│   ├── prisma/
│   │   └── client.ts
│   ├── routes/
│   │   └── user.routes.ts
│   ├── services/
│   │   └── user.service.ts
│   ├── types/
│   │   └── user.type.ts
│   ├── utils/
│   │   └── hash.util.ts
│   └── index.ts
├── prisma/
│   └── schema.prisma
├── .env
├── package.json
├── tsconfig.json
```

---

## 📦 Dependency Utama (Project Local)

```bash
npm install express cors dotenv bcrypt
npm install -D typescript ts-node-dev @types/express @types/node @types/cors @types/bcrypt prisma
```

---

## 🔨 Perubahan Kode Tambahan

### ✅ `services/user.service.ts`

Berisi logic pengolahan data dari Prisma dan pemanggilan utility hash password.

### ✅ `utils/hash.util.ts`

Berisi helper function untuk hash dan compare password dengan bcrypt.

### ✅ `types/user.type.ts`

Berisi tipe input dari user untuk keperluan validasi atau dokumentasi kode.

---

## 🚀 Menjalankan Project

```bash
npm run dev
```

Project akan berjalan di `http://localhost:3000` jika tidak diubah di `.env`.

---

## ✅ Endpoint Sementara

| Method | Endpoint | Deskripsi         |
| ------ | -------- | ----------------- |
| GET    | `/users` | Get all users     |
| POST   | `/users` | Register new user |

Body POST `/users`:

```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```
