import {
  DashboardOutlined,
  UserOutlined,
  WalletOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
const {  Sider } = Layout;

export default function Sidebar() {
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
            defaultSelectedKeys={["1"]}
            className="!bg-[#f5d9a6] text-black font-medium border-none mt-4"
            items={[
              { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
              { key: "2", icon: <UserOutlined />, label: "Users" },
              { key: "3", icon: <WalletOutlined />, label: "Wallet" },
              { key: "4", icon: <BarChartOutlined />, label: "Income" },
              { key: "5", icon: <SettingOutlined />, label: "Settings" },
              { key: "6", icon: <LogoutOutlined />, label: "Log Out" },
            ]}
          />
        </Sider>
}
