import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import {Avatar, Breadcrumb, Button, Modal} from "antd";
import {PlusCircleTwoTone} from "@ant-design/icons";
import {useState} from "react";
import { Space, Table, Tag } from 'antd';
import {useForm} from "@inertiajs/react";
const columns = [
    {
        title: 'Kullanıcı',
        dataIndex: 'user',
        key: 'user',
        render: (_, record) =>
            <div className="flex">
                <Avatar src={<img src={record.user.avatar} alt={ record.user.name } />} />
                <div>
                    { record.user.name } { record.user.surname }<br/>
                    { record.user.email }
                </div>
            </div>,
    },{
        title: 'Zoom ID',
        dataIndex: 'zoom_id',
        key: 'zoom_id',
        render: (text) => text,
    },{
        title: 'Zoom Password',
        dataIndex: 'zoom_password',
        key: 'zoom_password',
        render: (text) => text,
    },
    {
        title: 'Aksiyon',
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

const Meeting = ({ meetings }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        post(route('admin.meetings.store'), {
            onSuccess: () => {
                setIsModalOpen(false);
                reset();
            },
        });
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

          <Table columns={columns} dataSource={meetings} />
      </div>
    );
}

const breadcrumbs = [
    <Breadcrumb.Item>Anasayfa</Breadcrumb.Item>,
    <Breadcrumb.Item>Toplantılar</Breadcrumb.Item>,
];

Meeting.layout = page => <AuthenticatedLayout children={page} breadcrumbs={breadcrumbs} />

export default Meeting;
