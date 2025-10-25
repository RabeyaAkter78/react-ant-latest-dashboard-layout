import React from "react";
import { Layout, Menu, ConfigProvider } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  WalletOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const location = useLocation(); // to highlight current route

  const menuItems = [
    { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/users", icon: <UserOutlined />, label: "Users" },
    { key: "/wallet", icon: <WalletOutlined />, label: "Wallet" },
    { key: "/income", icon: <BarChartOutlined />, label: "Income" },
    { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
    { key: "/logout", icon: <LogoutOutlined />, label: "Log Out" },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#1c1c1c",
            headerColor: "rgb(255,255,255)",
            siderBg: "#f5d9a6",
            colorText: "rgb(0,0,0)",
          },
          Menu: {
            itemBg: "#f5d9a6",
            itemColor: "#000",
            itemSelectedBg: "#eacb8b",
            itemSelectedColor: "#000",
          },
        },
      }}
    >
      <Layout className="min-h-screen overflow-hidden">
        <Sider
          width={240}
          className="!bg-[#f5d9a6] min-h-screen fixed left-0 top-0 bottom-0 border-r border-black/10"
        >
          <div className="flex flex-col items-center py-6 border-b border-black/20">
            <h1 className="text-4xl font-bold text-black">QC</h1>
            <p className="text-xs text-black/70">Since 2015</p>
          </div>

          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            className="!bg-[#f5d9a6] text-black font-medium border-none mt-4"
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.key}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        <Layout className="min-h-screen ">
          <Header className="sticky top-0 z-50 flex justify-between items-center px-6 bg-[#1c1c1c] border-b border-gray-700 h-[64px]">
            <h2 className="text-xl font-semibold text-white">Dashboard</h2>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-600" />
              <div className="w-8 h-8 rounded-full bg-gray-600" />
            </div>
          </Header>

          <Content className="p-6 min-h-[calc(100vh-64px)]">
           <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
