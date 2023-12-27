import {
    CalendarOutlined,
    CommentOutlined,
    FolderOpenOutlined,
    MailOutlined,
    PayCircleOutlined, UserOutlined
} from "@ant-design/icons";
import {router} from "@inertiajs/react";

function getItem(label, key, icon, children, type, roles= ['user', 'admin']) {
    return {
        key,
        icon,
        children,
        label,
        type,
        roles,
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
    getItem("Talep Oluştur", 'requests', <MailOutlined />, [
        getItem("İzin Talebi", "/admin/requests/leave/create"),
        getItem("Avans Talebi", "/admin/requests/advance/create"),
    ], null,['user']),
    getItem("Talepler", 'requests-admin', <MailOutlined />, [
        getItem("İzin Talepleri", "/admin/requests/leave"),
        getItem("Avans Talepleri", "/admin/requests/advance"),
    ], null, ['admin']),
    getItem("Görevler", "/admin/todo", <FolderOpenOutlined />),
    getItem("Kullanıcılar", 'users', <UserOutlined />, [
        getItem("Listeleme", "/admin/users"),
        getItem("Oluştur", "/admin/users/create"),
    ], null, ['admin']),
    getItem("Toplantı Oluştur", "/admin/meeting", <CommentOutlined />),
    getItem("Ödeme Durumu", "/admin/my-advances", <PayCircleOutlined />,[], null, ['admin']),
    getItem("İzin Durumu", "/admin/my-leaves", <CalendarOutlined />,[], null, ['admin']),
];

export const getMenuItems = (user) => {
    return menuItems.filter((item) => {
        console.log(item.roles, user.role)
        if (item.roles.includes(user.role)) {
            if (item.children) {
                item.children = item.children.filter((child) => {
                    return child.roles.includes(user.role);
                });
            }
            return true;
        }
        return false;
    });
}
