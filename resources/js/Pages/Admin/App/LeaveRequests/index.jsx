import React, { useState } from 'react';
import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Button, Table, Avatar, Space, Modal, DatePicker } from 'antd';
import getGravatarURL from "@/utils/gravatar.js";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const AdvanceRequests = ({ auth }) => {
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

  const columns = [
    {
      title: 'Kullanıcı',
      dataIndex: 'user',
      key: 'user',
      sorter: (a, b) => a.name.length - b.name.length,
      render: (_, record) =>
        <div className="flex items-center">
          <Avatar className="mr-2" src={<img src={record.avatar} alt={record.name} />} />
          <div>
            {record.name}
          </div>
        </div>,
    },
    {
      title: '',
      dataIndex: 'izin',
      key: 'izin',
      render: (text) => (
        <Space size="middle">
          <Button type="dashed" className="rounded-full bg-sky-500/25" onClick={showModal}>
            <p className="text-blue-400 font-bold">Görüntüle</p>
          </Button>
        </Space>
      ),
    },

  ];

    const data = [
        {
            key: '1',
            name: 'Hacer Kılıç',
            avatar: getGravatarURL('khacer001@gmail.com'),
        },
        {
            key: '2',
            name: 'Ali Asım Bulut',
            avatar: getGravatarURL('aliasim1625@gmail.com'),
        },
        {
            key: '3',
            name: 'Osman Gürlek',
            avatar: getGravatarURL('osmangurlek10@gmail.com'),
        },
    ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <div className='flex flex-col justify-center space-y-6 place-items-center'>
          <div className='font-normal text-base text-center'>
            İzin Talebi
          </div>
          <div className='flex justify-center items-center border bg-amber-100 rounded-lg w-44 h-16'>
            <p className='text-amber-500'>Mazeretli İzin</p>
          </div>
          <div >
            <label className='text-blue-600'>İzin Tarihi: </label>
            <Space direction='vertical'>
              <RangePicker showTime />
            </Space>
          </div>
          <div className='flex justify-center items-center bg-gray-300 w-44 h-8 rounded-md'>
            Açıklama
          </div>
          <div>
            <TextArea rows={4}/>
          </div>
          <div className='flex justify-center gap-10 mt-5 p-3'>
            <Space size="middle">
              <Button className="rounded-full bg-green-500" type='primary'>Onayla</Button>
              <Button className="rounded-full" type="primary" danger>Reddet</Button>
            </Space>
          </div>
        </div>
      </Modal>
    </div>
  );
}

AdvanceRequests.layout = page => <AuthenticatedLayout children={page} />

export default AdvanceRequests;
