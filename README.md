# Worldwise

**Worldwise** is a React-based web application for interactive exploration of geographical data, leveraging modern tools and libraries for an efficient user experience.

---

## Technologies Used

- **Frontend**
  - **React** (18.2.0)
  - **React Router DOM** (6.24.1)
  - **React Leaflet** (4.2.1) with **Leaflet** (1.9.4)
  - **React Datepicker** (7.3.0)
  - **CSS**: Styling managed through modular CSS.

- **Backend**
  - **JSON Server** for simulating a REST API.

- **Build Tools**
  - **Vite**: High-performance build tool and development server.

- **Development Tools**
  - **ESLint**: Code quality assurance with React-specific rules.

---

- *Features*
    - Interactive Maps: Rendered with Leaflet and React Leaflet.
    - Data Management: City data served via JSON Server.
    - Date Selection: Intuitive date picker for filtering.
    - Routing: Smooth navigation using React Router DOM.


---

## Project Structure

```plaintext
Worldwise-main/
├── public/            # Static resources
├── src/
│   ├── App.jsx        # Main application component
│   ├── assets/        # Static assets (e.g., images)
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React Context API logic
│   ├── hooks/         # Custom React hooks
│   ├── index.css      # Global styles
│   ├── main.jsx       # React entry point
│   ├── pages/         # Application pages
├── data/
│   └── cities.json    # Geographical data
├── package.json       # Project metadata and dependencies
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```
---

## How to Run

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd Worldwise
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Start the JSON server:

    ```bash
    npm run server
    ```

5. Open the app in your browser at `http://localhost:5173`.

---

## Screenshots

### Home Page
![Dashboard](https://github.com/Redline1e/Worldwise/blob/main/public/screenshots/dashboard.png)

### Map
![Map](https://github.com/Redline1e/Worldwise/blob/main/public/screenshots/map.png)
