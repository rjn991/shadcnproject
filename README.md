
# Shadcn Project

## Tech Stack
This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **Shadcn**: A collection of accessible and customizable components.
- **Supabase**: An open-source Firebase alternative for authentication and database services.
- **Prisma**: A modern ORM for seamless database interaction.
- **Redux**: A predictable state container for managing application state.
- **Node.js**: A JavaScript runtime for building server-side applications.

---

## Environment Variables

### **Client**
The `client/.env` file should contain the following variable:

```env
VITE_API_BASE_URL=<your-api-base-url>
```

- Replace `<your-api-base-url>` with the base URL of your API.

### **Server**
The `server/.env` file should contain the following variables:

```env
DATABASE_URL=<your-database-url>
DIRECT_URL=<your-direct-database-url>
```

- Replace `<your-database-url>` with your database connection string.
- Replace `<your-direct-database-url>` with your direct database connection URL.

---

## Getting Started

### Prerequisites
- Node.js and npm installed.
- A Supabase project set up.
- Database schema managed with Prisma.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rjn991/shadcnproject.git
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

### Development
1. Start the client:
   ```bash
   cd client
   npm run dev
   ```

2. Start the server:
   ```bash
   cd ../server
   npm run start
   ```

---
