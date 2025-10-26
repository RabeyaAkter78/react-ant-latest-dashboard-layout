## Car Dashboard

1. Installation:
Create a new React project with Vite:
---
```
npm create vite@latest my-dashboard
cd my-dashboard
code .
 ```

* Choose React and JavaScript (or TypeScript if preferred).

my-dashboard is your project folder name.

## Install Dependencies 
--- 
```
npm install react-router-dom@latest
npm install tailwindcss @tailwindcss/vite
npm install antd @ant-design/icons
npm install recharts

```

2. Configure Tailwind CSS
---
In index.css:

```
@import "tailwindcss";

```
and in vite.config.js  file: 
```
import tailwindcss from "@tailwindcss/vite"; and call ## tailwindcss()
```

3. Folder Structure
```
my-dashboard/
├─ node_modules/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ Dashboard/Dashboard.jsx
│  │  │  └─ Users/User.jsx
│  │  └─ Layout/Mainlayout.jsx
│  ├─ routes/router.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```
4. In main.js file: Warp the router with Router Provider:
 ```

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
 ```

5. Routing Setup (router.jsx)
```
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import User from "../components/pages/Users/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/users", element: <User /> },
        ]
    }
]);
```



7. Run the Project
```
npm run dev

```


