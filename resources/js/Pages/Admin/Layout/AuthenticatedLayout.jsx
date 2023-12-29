import { useEffect, useState } from "react";
import {
    Breadcrumb,
    Layout,
    Dropdown,
    Menu,
    Space,
    Button,
    Avatar,
    Drawer,
} from "antd";
import {
    DownOutlined,
    MailOutlined,
    BellOutlined,
    MessageOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    pollingUserActive,
    requestUserActive,
} from "@/utils/pollingUserActive.js";
import {
    determineOpenKeys,
    getMenuItems,
    onMenuItemClick,
} from "@/utils/adminMenu.jsx";
import { router, usePage } from "@inertiajs/react";

const { Header, Content, Sider } = Layout;

const items = [
    {
        label: "Profili Düzenle",
        key: "1",
    },
    {
        label: "Dil Seçenekleri",
        key: "2",
    },
    {
        label: "Çıkış",
        key: "3",
    },
];

const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

export default function AuthenticatedLayout({ children, breadcrumbs = [] }) {
    const [theme, setTheme] = useState("dark");
    const { ziggy } = usePage().props;
    const { auth } = usePage().props;
    const [current, setCurrent] = useState(ziggy.currentPath);
    const [openKeys, setOpenKeys] = useState(determineOpenKeys(current));
    const menuItems = getMenuItems(auth.user);

    // polling backend every 15 seconds to set user's active status
    useEffect(() => {
        requestUserActive();
        const interval = pollingUserActive(15);
        return () => clearInterval(interval);
    }, []);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const menuItemChanged = (current, openKeys) => {
        setOpenKeys(openKeys);
        setCurrent(current);
        router.get(current);
    };

    const dropdownClicked = ({ key }) => {
        if (key === "logout") {
            if (confirm("Çıkış yapmak istediğinize emin misiniz?"))
                router.post("/logout");
        }
    };

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
                            <Button
                                type="primary"
                                icon={<MessageOutlined />}
                                onClick={showDrawer}
                            ></Button>

                            <Dropdown
                                menu={{
                                    items,
                                    onClick: dropdownClicked,
                                }}
                            >
                                <Space>
                                    <Avatar src={url} />
                                    <DownOutlined className="text-white" />
                                </Space>
                            </Dropdown>
                        </Space>
                        <Drawer
                            title="Messages"
                            placement="right"
                            onClose={onClose}
                            open={open}
                        >
                            <div className="flex flex-col">
                                <div className=" flex gap-2 max-w-xs p-4 rounded-md mb-2">
                                    {" "}
                                    
                                    <Space>
                                        <div>
                                            <Avatar
                                                size="small"
                                                icon={<UserOutlined />}
                                            />
                                        </div>
                                    </Space>
                                    <div className="bg-blue-500 text-white p-2 rounded-md mb-1">
                                        {" "}
                                        
                                        Merhabalar Muhammed Bey.
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <div className=" flex gap-2 max-w-xs p-4 rounded-md mb-2">
                                        {" "}
                                       
                                        <div className="bg-blue-500 p-3 text-white rounded-md">
                                            Merhabalar Ayşe Hanım.
                                        </div>
                                        
                                        <Space>
                                        <div><Avatar
                                                size="small"
                                                icon={<UserOutlined />}
                                            /></div>
                                            
                                        </Space>
                                    </div>
                                </div>
                            </div>
                        </Drawer>
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
