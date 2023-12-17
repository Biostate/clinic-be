import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import {Avatar, Breadcrumb, Button, Modal} from "antd";
import {PlusCircleTwoTone} from "@ant-design/icons";
import {useState} from "react";
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Kullanıcı',
        dataIndex: 'user',
        key: 'user',
        render: (_, record) =>
            <div className="flex">
                <Avatar src={<img src={record.avatar} alt={ record.name } />} />
                <div>
                    { record.name } <br/>
                    { record.email }
                </div>
            </div>,
    },{
        title: 'Zoom ID',
        dataIndex: 'zoomId',
        key: 'zoomId',
        render: (text) => <a>{text}</a>,
    },{
        title: 'Zoom Password',
        dataIndex: 'zoomPassword',
        key: 'zoomPassword',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button>
                    Bağlan
                    </Button>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        email: 'john.brown@gmail.com',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        zoomId: '123456789',
        zoomPassword: '123456789',
    },
    {
        key: '2',
        name: 'Jim Green',
        email: 'john.brown@gmail.com',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        zoomId: '123456789',
        zoomPassword: '123456789',
    },
    {
        key: '3',
        name: 'Joe Black',
        email: 'john.brown@gmail.com',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        zoomId: '123456789',
        zoomPassword: '123456789',
    },
];

const Meeting = ({ auth }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
      <div>
          <Button onClick={showModal} type="danger" icon={<PlusCircleTwoTone />} size="large">
              Toplantı Oluştur
          </Button>
          <Modal
              title="Toplantı Oluştur"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText={"Oluştur"}
                cancelText={"İptal"}
          >
              <p>Oluşturmak istediğinize emin misiniz?</p>
          </Modal>

          <Table columns={columns} dataSource={data} />
      </div>
    );
}

const breadcrumbs = [
    <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>,
    <Breadcrumb.Item>Toplantılar</Breadcrumb.Item>,
];

Meeting.layout = page => <AuthenticatedLayout children={page} breadcrumbs={breadcrumbs} />

export default Meeting;
