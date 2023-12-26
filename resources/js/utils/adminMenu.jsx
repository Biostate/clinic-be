import {
    CalendarOutlined,
    CommentOutlined,
    FolderOpenOutlined,
    MailOutlined,
    PayCircleOutlined, UserOutlined
} from "@ant-design/icons";
import {router} from "@inertiajs/react";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const determineOpenKeys = (currentRoute) => {
    // get routes that have children
    const routesWithChildren = menuItems.filter((item) => item.children);

    // get the route that matches the current route
    const currentRouteItem = routesWithChildren.find((item) => {
        if (item.children) {
            return item.children.find((child) => child.key === currentRoute);
        }
        return false;
    });

    if (currentRouteItem) {
        return [currentRouteItem.key];
    }

    return [];
};

export const onMenuItemClick = (e, callback) => {
    if (!e.key){
        return;
    }

    callback(e.key, determineOpenKeys(e.key));
};

export const menuItems = [
    getItem("Talep Oluştur (Personel)", 'requests', <MailOutlined />, [
        getItem("İzin Talebi", "/admin/requests/leave/create"),
        getItem("Avans Talebi", "/admin/requests/advance/create"),
    ]),
    getItem("Talepler (Yönetici)", 'requests-admin', <MailOutlined />, [
        getItem("İzin Talepleri", "/admin/requests/leave"),
        getItem("Avans Talepleri", "/admin/requests/advance"),
    ]),
    getItem("Görevler", "/admin/todo", <FolderOpenOutlined />),
    getItem("Kullanıcılar", 'users', <UserOutlined />, [
        getItem("Listeleme", "/admin/users"),
        getItem("Oluştur", "/admin/users/create"),
    ]),
    getItem("Toplantı Oluştur", "/admin/meeting", <CommentOutlined />),
    getItem("Ödeme Durumu", "/admin/my-advances", <PayCircleOutlined />),
    getItem("İzin Durumu", "/admin/my-leaves", <CalendarOutlined />),
];
