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


export const onMenuItemClick = (e) => {
    console.log("click ", e);
    if (!e.key){
        return;
    }

    router.get(e.key);
};

export const menuItems = [
    getItem("Talep Oluştur (Personel)", null, <MailOutlined />, [
        getItem("İzin Talebi", "/admin/requests/leave/create"),
        getItem("Avans Talebi", "/admin/requests/advance/create"),
    ]),
    getItem("Talepler (Yönetici)", null, <MailOutlined />, [
        getItem("İzin Talepleri", "/admin/requests/leave"),
        getItem("Avans Talepleri", "/admin/requests/advance"),
    ]),
    getItem("Görevler", "/admin/todo", <FolderOpenOutlined />),
    getItem("Kullanıcılar", null, <UserOutlined />, [
        getItem("Listeleme", "/admin/users"),
        getItem("Oluştur", "/admin/users/create"),
    ]),
    getItem("Toplantı Oluştur", "/meeting", <CommentOutlined />),
    getItem("Ödeme Durumu", "5", <PayCircleOutlined />),
    getItem("İzin Durumu", "6", <CalendarOutlined />),
];
