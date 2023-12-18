import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { Input } from 'antd';

const LeaveRequest = ({ auth }) => {

  const App = () => <Input placeholder="Basic usage" />;

    return (
      <>
      {/* İzin Türü Seçimi */}
      <div className="mt-6" >
        <div className="flex gap-6 justify-center " >
          <div className=" flex flex-col gap-6" >
            <div className="flex justify-center" >
                <input type="checkbox" className=""  />
            </div>
            <div className="InputField w-[200px] h-20 p-4 bg-teal-50 rounded-[20px] border border-stone-300 flex-col justify-between items-center inline-flex ">
              <div class=" text-center pt-2  text-emerald-400 text-base font-bold font-['Noto Sans'] leading-normal">Yıllık İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6" >
            <div className="flex justify-center" >
                <input type="checkbox" />
            </div>
            <div className="InputField w-[200px] h-20 p-4 bg-blue-100 rounded-[20px] border border-stone-300 flex-col justify-between items-center inline-flex ">
              <div class="text-center pt-2 text-blue-400 text-base  font-bold font-['Noto Sans'] leading-normal">Yıllık İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6" >
            <div className="flex justify-center" >
                <input type="checkbox" />
            </div>
            <div className="InputField w-[200px] h-20 p-4 bg-yellow-50 rounded-[20px] border border-stone-300 flex-col justify-between items-center inline-flex ">
              <div class="text-center pt-2 text-amber-400 text-base font-bold font-['Noto Sans'] leading-normal">Yıllık İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6" >
            <div className="flex justify-center" >
                <input type="checkbox" />
            </div>
            <div className="InputField w-[200px] h-20 p-4 bg-red-50 rounded-[20px] border border-stone-300 flex-col justify-between items-center inline-flex ">
              <div class="text-center pt-2 text-red-400 text-base font-bold font-['Noto Sans'] leading-normal">Yıllık İzin</div>
            </div>
          </div>
        </div>

        {/* İzin Formu */}
        <div className="mt-[40px]" >
          <h1 className="  h-6 text-center text-black text-[22px] font-normal font-['DM Sans'] leading-7" >
            İzin Formu
          </h1>
          <div className=" flex flex-col mt-5" >
            <div className="flex gap-8 justify-center" >
              <div>
                <Input className="rounded-md p-3 " placeholder="İsim" ></Input>
              </div>
              <div>
                <Input className="rounded-md p-3 "  placeholder="Soyisim"></Input>
              </div>
            </div>            
            <div className="flex justify-center " >
              <Input className="rounded-md p-3 mt-5 max-w-md " placeholder="Mail Adresi" ></Input>
            </div>
          </div>
        </div>

        {/* İzin tarih seçimi */}

      </div>   
      </>
    );
}

LeaveRequest.layout = page => <AuthenticatedLayout children={page} />

export default LeaveRequest;
