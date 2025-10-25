🔧 Project Setup

Create a new React project with Vite:

npm create vite@latest my-dashboard
cd my-dashboard
code .


Choose React and JavaScript (or TypeScript if preferred).

my-dashboard is your project folder name.

📦 Install Dependencies
npm install react-router-dom@latest
npm install tailwindcss @tailwindcss/vite
npm install recharts
npm install antd @ant-design/icons


React Router – page navigation

Tailwind CSS – styling

Recharts – charts

Ant Design – UI components

🎨 Configure Tailwind CSS

In index.css (or main.css):

@import "tailwindcss";

🗂 Folder Structure
my-dashboard/
├─ node_modules/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ home/Home.jsx
│  │  │  └─ Users/User.jsx
│  │  └─ Layout/Mainlayout.jsx
│  ├─ routes/router.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ vite.config.js

⚡ Main Entry (main.jsx)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

🛣 Routing Setup (router.jsx)
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../components/pages/home/Home";
import User from "../components/pages/Users/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/users", element: <User /> },
        ]
    }
]);

🏗 Main Layout (Mainlayout.jsx)
// Imports...
const MainLayout = () => {
  const location = useLocation();
  const menuItems = [
    { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/users", icon: <UserOutlined />, label: "Users" },
    { key: "/wallet", icon: <WalletOutlined />, label: "Wallet" },
    { key: "/income", icon: <BarChartOutlined />, label: "Income" },
    { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
    { key: "/logout", icon: <LogoutOutlined />, label: "Log Out" },
  ];

  return (
    <ConfigProvider theme={{/* custom theme */}}>
      <Layout className="min-h-screen">
        <Sider> {/* Sidebar with Menu & Logo */} </Sider>
        <Layout>
          <Header> {/* Top Bar */} </Header>
          <Content> {/* Outlet content */} </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};


Key points:

Sider – Sidebar menu

Header – Top bar

Content – Main area for child routes

ConfigProvider – Customize Ant Design theme

useLocation – Highlights active menu item

📄 Pages (Home & User)

Home.jsx

const Home = () => <div className="text-lg font-medium">This is the Home Page.</div>;
export default Home;


User.jsx

const User = () => <div className="text-lg font-medium">This is the Users Page.</div>;
export default User;

▶️ Run the Project
npm run dev


Open your browser at: http://localhost:5173

✅ Summary

Create React project with Vite

Install Tailwind, Ant Design, React Router, and Recharts

Organize folder structure for pages, layout, and routes

Build sidebar, header, and main content layout

Use React Router v6 for navigation

Customize Ant Design themes