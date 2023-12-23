import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from '@/Components/Calendar';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Button, Table, Avatar, Space} from 'antd';

const columns = [
  {
      title: 'Kullanıcı',
      dataIndex: 'user',
      key: 'user',
      render: (_, record) =>
          <div className="flex items-center">
              <Avatar className="mr-2" src={<img src={record.avatar} alt={ record.name } />} />
              <div>
                  { record.name }
              </div>
          </div>,
  },{
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <a>{text}</a>,
  },
  {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <Button type="dashed">
              Düzenle  
            </Button>    
            <Button type="primary" danger>
              Kullanıcı Sil
            </Button>
          </Space>
      ),
  },
];

const data = [
  {
      key: '1',
      name: 'Wade Warren',
      email: 'antt@gmail.com',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
      key: '2',
      name: 'Robert Fox',
      email: 'antt@gmail.com',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
  {
      key: '3',
      name: 'Marven McKinney',
      email: 'antt@gmail.com',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  },
];

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Users = ({ auth }) => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );  
}

Users.layout = page => <AuthenticatedLayout children={page} />

export default Users;