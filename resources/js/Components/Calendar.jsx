import React from 'react';
import { Badge, Calendar } from 'antd';
const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 1:
            listData = [
                {
                    type: 'success',
                    content: 'Haftabaşı toplantısı.',
                },
            ];
            break;
        case 4:
            listData = [
                {
                    type: 'success',
                    content: 'Piknik etkinliği.',
                },
            ];
            break;
        case 5:
            listData = [
                {
                    type: 'success',
                    content: 'Retro.',
                },
            ];
            break;
        case 8:
            listData = [
                {
                    type: 'success',
                    content: 'Haftabaşı toplantısı.',
                },
                {
                    type: 'success',
                    content: 'Müşteri toplantısı.',
                },
            ];
            break;
        case 9:
            listData = [
                {
                    type: 'success',
                    content: 'Online Eğitim Semineri.',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'success',
                    content: 'Ayarlanmış Zoom Toplantısı.',
                },
            ];
            break;
        case 12:
            listData = [
                {
                    type: 'success',
                    content: 'Retro.',
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: 'success',
                    content: 'Haftabaşı toplantısı.',
                },
            ];
            break;
        case 16:
            listData = [
                {
                    type: 'success',
                    content: 'Ayarlanmış Zoom Toplantısı.',
                },
            ];
            break;
        case 18:
            listData = [
                {
                    type: 'success',
                    content: 'Ayarlanmış Zoom Toplantısı.',
                },
            ];
            break;
        case 19:
            listData = [
                {
                    type: 'success',
                    content: 'Retro.',
                },
            ];
            break;
        case 22:
            listData = [
                {
                    type: 'success',
                    content: 'Haftabaşı toplantısı.',
                },
            ];
            break;
        case 26:
            listData = [
                {
                    type: 'success',
                    content: 'Retro.',
                },
            ];
            break;
        case 29:
            listData = [
                {
                    type: 'success',
                    content: 'Haftabaşı toplantısı.',
                },
            ];
            break;
        case 31:
            listData = [
                {
                    type: 'success',
                    content: 'Aylık değerlendirme.',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};
const App = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };
    return <Calendar cellRender={cellRender} />;
};
export default App;
