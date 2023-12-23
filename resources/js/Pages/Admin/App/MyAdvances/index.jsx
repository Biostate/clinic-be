import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

import { Space, Table, Tag } from 'antd';
import AdvanceComponent from "@/Components/AdvanceComponent";

const MyAdvances = ({ auth }) => {

    const columns = [
        {
          title: 'Türü',
          dataIndex: 'type',
          key: 'type',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Miktar',
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
          title: 'Tarih',
          dataIndex: 'Date',
          key: 'Date',
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
          type: 'Avans',
          quantity: "10.000₺" ,
          Date: '09:30:12 - 01/03/23',
          tags: ""
        },
        {
          key: '2',
          type: 'Avans',
          quantity: "10.000₺",
          Date: '09:30:12 - 01/03/23',
          tags: "",
        },
        {
          key: '3',
          type: 'Avans',
          quantity: "10.000₺",
          Date: '09:30:12 - 01/03/23',
          tags: ""
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
