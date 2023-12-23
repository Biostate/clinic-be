import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

import { Space, Table, Tag } from 'antd';
import AdvanceComponent from "@/Components/AdvanceComponent";

const MyAdvances = ({ auth }) => {

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

            <div className="flex gap-4 p-2  " >
                <div>
                    <AdvanceComponent color="blue" title="Toplam Maaş" cost="30.000₺"  />
                </div>
                <div>
                    <AdvanceComponent color="green" title="Kesintiler" cost="5000₺" day="5" dayTitle="Çalışımayan Gün"  />
                </div>
            </div>
            <div className="mt-8" >
                <h1 className="h-8 text-zinc-800 text-base font-semibold font-['Poppins'] leading-normal" >Ödeme Geçmişi</h1>
            </div>
            <div>
            <Table columns={columns} dataSource={data} />;
            </div>
        </>
    );
};

MyAdvances.layout = (page) => <AuthenticatedLayout children={page} />;

export default MyAdvances;
