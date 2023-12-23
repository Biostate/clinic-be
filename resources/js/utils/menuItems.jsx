import {
    CalendarOutlined,
    CommentOutlined,
    FolderOpenOutlined,
    MailOutlined,
    PayCircleOutlined
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const menuItems = [
    getItem("Talep Oluştur", "1", <MailOutlined />, [
        getItem("İzin Talebi", "2"),
        getItem("Avans Talebi", "3"),
    ]),
    getItem("Toplantı Oluştur", "4", <CommentOutlined />),
    getItem("Ödeme Durumu", "5", <PayCircleOutlined />),
    getItem("İzin Durumu", "6", <CalendarOutlined />),
    getItem("To-Do List", "7", <FolderOpenOutlined />),
];

export default menuItems;
