# Coolmate E-commerce

Coolmate is a full-stack fashion e-commerce platform for apparel discovery, shopping, checkout, and store administration.

## Project Goals

- Build a realistic fashion e-commerce workflow
- Deliver a clean, athletic, high-contrast Coolmate storefront
- Practice RESTful Java backend development with Spring Boot
- Implement authentication and role-based authorization
- Design a relational product, inventory, cart, and order model
- Provide responsive customer and admin experiences

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS direction and reusable UI primitives
- Lucide React

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA / Hibernate
- MySQL for local runtime
- H2 for isolated tests
- JWT authentication

## Project Structure

```text
backend/   Spring Boot API and persistence layer
frontend/  React + Vite storefront
docs/      Design, requirements, and roadmap
```

## Run the frontend

```powershell
cd frontend
npm install
npm run dev
```

## Run backend tests

The tests use the `test` profile and an in-memory H2 database, so MySQL credentials are not required for tests.

```powershell
cd backend
mvn test
```

For runtime MySQL configuration, set `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD`, or edit `backend/src/main/resources/application.properties`.

## Product documentation

- [Design system](docs/DESIGN.md)
- [Requirements](docs/REQUIREMENTS.md)
- [Roadmap](docs/ROADMAP.md)
