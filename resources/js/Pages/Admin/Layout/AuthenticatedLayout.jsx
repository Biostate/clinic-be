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
import menuItems from "@/utils/menuItems.jsx";

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
        key: '3',
    },
];

const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

export default function AuthenticatedLayout({ children, breadcrumbs = [] }) {
    const [theme, setTheme] = useState("dark");
    const [current, setCurrent] = useState("1");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    // polling backend every 15 seconds to set user's active status
    useEffect(() => {
        requestUserActive();
        const interval = pollingUserActive(15);
        return () => clearInterval(interval);
    }, []);

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
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Avatar src={url} />
                                        <DownOutlined className="text-white" />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Space>
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        theme={theme}
                        onClick={onClick}
                        defaultOpenKeys={["sub1"]}
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
