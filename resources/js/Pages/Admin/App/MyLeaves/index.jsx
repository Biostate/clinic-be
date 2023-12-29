import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import LeavesComponent from "@/Components/LeavesComponent.jsx";
import { Space, Table, Tag } from 'antd';


const MyLeaves = ({ auth }) => {
    const columns = [
        {
          title: 'İzin Türü',
          dataIndex: 'type',
          key: 'type',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'İzin Süresi',
          dataIndex: 'duration',
          key: 'duration',
        },
        {
          title: 'İzin Başlangıç Tarihi',
          dataIndex: 'startDate',
          key: 'startDate',
        },
        {
          title: 'Durum ',
          key: 'tags',
          dataIndex: 'tags',
        }
        
      ];
      const data = [
        {
          key: '1',
          type: 'Ücretsiz İzin',
          duration: "2Gün" ,
          startDate: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          type: 'Jim Green',
          duration: 42,
          startDate: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          type: 'Joe Black',
          duration: 32,
          startDate: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        }
      ];

    return (
        <>
            <h1 className="text-gray-600 text-lg font-normal font-['Poppins'] leading-normal" > İzin Durum </h1> 

            <div className="flex gap-4   " >
                <div>
                    <LeavesComponent color="blue" title="Ocak Ayında Kullanılan izin" value="4 Gün 4 Saat" />
                </div>
                <div>
                    <LeavesComponent color="green" title="Kalan İzin Hakkı" value="26 Gün 20 Saat" />
                </div>
            </div>
            <div className="mt-8" >
                <h1 className="h-8 text-zinc-800 text-base font-semibold font-['Poppins'] leading-normal" >İzin Geçmişi</h1>
            </div>
            <div>
            <Table columns={columns} dataSource={data} />;
            </div>
        </>
    );
};

MyLeaves.layout = (page) => <AuthenticatedLayout children={page} />;

export default MyLeaves;
