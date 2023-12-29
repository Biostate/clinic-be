import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { Input } from 'antd';
import { Select, Space } from 'antd';
import Button from "@/Components/Button";



const AdvanceRequest = ({ auth }) => {
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  
  const App = () => <Input placeholder="Basic usage" />;

  
    return (
      <div className="font-['DM Sans']" >
          <div className="flex flex-col justify-center gap-5">
          <div class=" h-6 text-center text-black text-[22px] font-normal font-['DM Sans'] leading-7">Avans Talebi</div>
              
              <div className=" flex justify-center" >
                <div className="bg-teal-50 px-12 py-3 border-2 rounded-md"  >
                  <p className="text-center" >
                    Avans Tutarı
                  </p>
                </div>
              </div>
              <div className="flex justify-center" >
                <Input placeholder="Miktar" className="rounded-md max-w-xs "  ></Input>
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
                <div className="SignUp w-[280px] h-[49px] p-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                  <div className="Text px-1.5 justify-start items-start gap-2.5 flex">
                      <div className="Button text-white text-lg font-normal font-['DM Sans'] leading-normal tracking-wide"> Talep Gönder </div>
                  </div>
                </div>
              </div>
  
          </div>
      </div>
    );
}

AdvanceRequest.layout = page => <AuthenticatedLayout children={page} />

export default AdvanceRequest;
