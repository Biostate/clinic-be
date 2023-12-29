import React, { useState } from 'react';
import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Button, Table, Avatar, Space, Modal, DatePicker } from 'antd';

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
      title: 'Avans Talepleri',
      key: 'avans',
      render: (_, record) => (
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
      name: 'Wade Warren',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
    {
      key: '2',
      name: 'Robert Fox',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
    {
      key: '3',
      name: 'Marven McKinney',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div className='flex flex-col justify-center space-y-4 place-items-center'>
          <div className='font-normal text-base text-center'>
            Avans Talebi
          </div>
          <div className='text-base text-center border-solid border-2 border-indigo-600 w-32 rounded-md'>
            Avans Tutarı
          </div>
          <div className='w-64 justify-self-center'>
            <Input placeholder='Avans TL cinsinden yazınız'></Input>
          </div>
          <div className='text-base text-center border-solid border-2 border-indigo-600 w-44 rounded-md'>
            Avans İstenilen Ay
          </div>
          <div>
            <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
            <DatePicker renderExtraFooter={() => 'extra footer'} picker="year" />
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
