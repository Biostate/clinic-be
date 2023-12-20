import { useState } from "react";
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
    CommentOutlined,
    MailOutlined,
    BellOutlined,
    CalendarOutlined,
    PayCircleOutlined,
    FolderOpenOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const itemss = [
    getItem("Talep Oluştur", "1", <MailOutlined />, [
        getItem("İzin Talebi", "2"),
        getItem("Avans Talebi", "3"),
    ]),
    getItem("Toplantı Oluştur", "4", <CommentOutlined />),
    getItem("Ödeme Durumu", "5", <PayCircleOutlined />),
    getItem("İzin Durumu", "6", <CalendarOutlined />),
    getItem("To-Do List", "7", <FolderOpenOutlined />),
];

const items = [
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                1st menu item
            </a>
        ),
        key: "0",
    },
    {
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            ></a>
        ),
        key: "1",
    },
    {
        type: "divider",
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
                        items={itemss}
                    />
                    <div style={{ padding: "16px", textAlign: "center" }}>
                        <img
                            src="path/to/your/image.jpg"
                            alt="Your Image"
                            style={{ maxWidth: "100%" }}
                        />
                    </div>
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
