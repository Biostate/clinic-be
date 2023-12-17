
import {
    ToolOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {useState} from "react";
import { router } from '@inertiajs/react'
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    {
        label:'Talep Oluştur',
        key:'/admin/requests',
        children: [
            {
                label:'İzin',
                key:'/admin/requests',
            },
            {
                label:'Avans',
                key:'/admin/requests',
            }
        ]
    },
    {
        label:'Toplantı Oluştur',
        key:'/admin/meeting'

    },
    {
        label:'Ödeme Durumu',
        key:'/admin/payment'
    },
    {
        label:'Çıkış Yap',
        key:'logout',
        icon:<UserOutlined/>
    }
];

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));


export default function AuthenticatedLayout({ children }){
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const getDefaultOpenKeys = (pathname) => {
        // find pathname in item children then return parent key
        const item = items.find((item) => {
            if (item.children) {
                return item.children.find((child) => child.key === pathname);
            }
            return false;
        });
        if (item) {
            return [item.key];
        }
        return [];
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="h-full">
                    <img className="h-full" src="/assets/images/logo.png" alt="logo" />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        //defaultSelectedKeys={[pathname]}
                        // defaultOpenKeys={getDefaultOpenKeys(pathname)}
                        mode="inline"
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items}
                        onClick={(e) => {
                            if (e.key === 'logout') {
                                router.push('/app/login');
                            }else {
                                router.push(e.key);
                            }
                        }}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
