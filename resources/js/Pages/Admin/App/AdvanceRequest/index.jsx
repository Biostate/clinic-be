import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space,Input,Select } from 'antd';
const { confirm } = Modal;




const AdvanceRequest = ({ auth }) => {
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  const App = () => <Input placeholder="Basic usage" />;

  const showPromiseConfirm = () => {
    confirm({
      title: 'Do you confirm the information you have entered ?',
      icon: <ExclamationCircleFilled />,
      content: ' ',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  
    return (
      <div className="font-['DM Sans']" >
          <div className="flex flex-col justify-center gap-5">
          <div class=" h-6 text-center text-black text-[22px] font-normal  leading-7">Avans Talebi</div>
              
              <div className=" flex justify-center" >
                <div className="bg-teal-50 px-12 py-3 border-2 rounded-md"  >
                  <p className="text-center" >
                    Avans Tutarı
                  </p>
                </div>
              </div>
              <div className="flex justify-center" >
                <Input placeholder="Miktar" className="rounded-md max-w-xs "></Input>
              </div>
              <div className=" flex justify-center" >
                <div className="bg-teal-50 px-12 py-3 border-2 rounded-md"  >
                  <p className="text-center" >
                    Avans İstenilen Ay
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-5 "  >
                <div>
                <Space wrap>
                  <Select
                    defaultValue="Bu Ay"
                    style={{
                      width: 200,
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: 'first',
                        label: 'Bu Ay',
                      },
                      {
                        value: 'second',
                        label: 'Bir Sonraki Ay',
                      },
                      {
                        value: 'third',
                        label: 'İki Sonraki Ay',
                      },
                      
                    ]}
                  />
                </Space>

                </div>
                
              </div>
              
              <div className="flex justify-center" >
                <div className=" px-14 py-3.5 bg-blue-600 rounded-[20px] justify-center items-center">
                  
                  <button className=" text-white text-lg px-1.5  tracking-wide" onClick={showPromiseConfirm} > Talep Gönder </button>
                </div>
              </div>
  
          </div>
      </div>
    );
}

AdvanceRequest.layout = page => <AuthenticatedLayout children={page} />

export default AdvanceRequest;
