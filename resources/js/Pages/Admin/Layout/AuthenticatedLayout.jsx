import {useEffect, useState} from "react";
import {
    Breadcrumb,
    Layout,
    Dropdown,
    Menu,
    Space,
    Button,
    Avatar,
} from "antd";
import {
    DownOutlined,
    MailOutlined,
    BellOutlined,
} from "@ant-design/icons";
import {pollingUserActive, requestUserActive} from "@/utils/pollingUserActive.js";
import {determineOpenKeys, menuItems, onMenuItemClick} from "@/utils/adminMenu.jsx";
import {router, usePage} from "@inertiajs/react";

const { Header, Content, Sider } = Layout;

const items = [
    {
        label: 'Profili Düzenle',
        key: '1',
    },
    {
        label: 'Dil Seçenekleri',
        key: '2',
    },
    {
        label: 'Çıkış',
        key: 'logout',
    },
];

const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

export default function AuthenticatedLayout({ children, breadcrumbs = [] }) {
    const [theme, setTheme] = useState("dark");
    const { ziggy } = usePage().props
    const [current, setCurrent] = useState(ziggy.currentPath);
    const [openKeys, setOpenKeys] = useState(determineOpenKeys(current));

    // polling backend every 15 seconds to set user's active status
    useEffect(() => {
        requestUserActive();
        const interval = pollingUserActive(15);
        return () => clearInterval(interval);
    }, []);

    const menuItemChanged = (current, openKeys) => {
        setOpenKeys(openKeys);
        setCurrent(current);
        router.get(current)
    }

    const dropdownClicked = ({ key }) => {
        if (key === 'logout') {
            if (confirm('Çıkış yapmak istediğinize emin misiniz?'))
                router.post('/logout')
        }
    }

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Header>
                <div className="flex justify-between">
                    <div className=" flex gap-2  ">
                        <div className="pt-1">
                            <img src="\assets\images\Logo.png" alt="" />
                        </div>
                        <div className="pt-4">
                            <img
                                src="\assets\images\International_Clinics.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div>
                        <Space size={15}>
                            <Button type="primary" icon={<MailOutlined />} />
                            <Button type="primary" icon={<BellOutlined />} />

                            <Dropdown
                                menu={{
                                    items,
                                    onClick: dropdownClicked
                                }}
                            >
                                <Space>
                                    <Avatar src={url} />
                                    <DownOutlined className="text-white" />
                                </Space>
                            </Dropdown>
                        </Space>
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        theme={theme}
                        onClick={(e) => onMenuItemClick(e, menuItemChanged)}
                        defaultOpenKeys={openKeys}
                        selectedKeys={[current]}
                        mode="inline"
                        items={menuItems}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: "0 24px 24px",
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: "16px 0",
                        }}
                    >
                        {breadcrumbs.map((breadcrumb) => breadcrumb)}
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
