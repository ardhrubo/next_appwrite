# Next.js + Appwrite Authentication

A modern web application built with Next.js and Appwrite backend services for user authentication.

## Project Overview

This project demonstrates integration between Next.js and Appwrite, providing a complete authentication system with:

- User registration
- Login/logout functionality
- User profile management
- Secure authentication using Appwrite

## Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun package manager
- An Appwrite account and project setup

## Environment Setup

1. Clone this repository
2. Copy `example.env` to `.env.local` and fill in your Appwrite credentials:

```
NEXT_PUBLIC_APPWRITE_URL=your-appwrite-endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
```

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/appwrite/` - Appwrite configuration and service definitions
- `src/conf/` - Application configuration
- `src/app/` - Next.js app router components and pages

## Key Features

- Modern authentication flow with Appwrite
- Type-safe implementation with TypeScript
- Responsive UI with Tailwind CSS

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

This application can be deployed to Vercel or any other Next.js-compatible hosting platform.

For Appwrite, consider using Appwrite Cloud for simplified management or self-host using Docker.

## License

MIT
