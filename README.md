# Patient Management App

This project is a React-based patient management application that allows users to view, add, and edit patient information. It uses **Vite** for fast bundling, **React Query** and **Axios** for data fetching, **Zustand** for state management, and **React Hot Toast** for notifications.

## Features

- View patient details, including name, avatar, description, and website.
- Expand and collapse patient information.
- Edit and add new patient data.
- Uses React Query with Axios for API connection.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/belusuarez13/patient-management.git
cd patient-management
```

### 2. Install Dependencies

Use npm or yarn to install the required packages:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a .env file in the root of the project.

```bash
# .env
VITE_API_BASE_URL=https://your-api-url.com
```

### 4. Run the App

Start the development server using Vite:

```bash
npm run dev
# or
yarn dev
```

The app should now be running at http://localhost:5173.

### 5. Linting and Formatting

This project uses ESLint and Prettier for code quality and consistency. To check for linting errors, run:

```bash
npm run lint
# or
yarn lint
```

To format code with Prettier, run:

```bash
npm run format
# or
yarn format
```

## Tools and Libraries

### React

I've decided to use React as it is the language I have more experience
comparing it with Vue.

### Vite

In my experience with Vite, it offers great speed for development, has hot module
replacement and only some lightweight configurations needed. Those main benefits are
the ones that makes it better to CRA nowadays.

### React Query

React Query is a simple way to communicate with an API. It offers calls management,
storing data fetched, showing errors and showing the call status. It does not
require any boilerplate code.

### Axios

Axios combined with React Query makes it very simple to make an API call. It automatically
transforms reuqests and responses to and from JSON. It also provides error handling and
requests and responses interceptors.

### Zustand

It is my favorite state management library as it does not require boilerplate code. As it
works as hooks, it makes the most from the benefits of using hooks in React. It prevents
unnecesary re-renders, makes data accesible throughout the app and it is easy and simple to
use and understand.

### React Hot Toast

In my experience, react-hot-toast is the simplest toaster to show success messagess within
apps.

## Folder Structure

I've decided to divide the folder structure like the following so as to
have separated and clear responsibilities that make a simple to read
repository. It makes it easier to understand and debug afterwards.

```bash
├── src
│   ├── assets          # Static files like images
│   ├── api             # API calls and configurations (e.g., Axios instances)
│   ├── components      # Reusable components
│   ├── pages           # App pages
│   ├── stores          # Zustand store definitions
│   └── App.tsx         # Main app component
└── README.md
```
