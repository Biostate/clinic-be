import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space,Input } from 'antd';
const { confirm } = Modal;



const LeaveRequest = ({ auth }) => {

  const App = () => <Input placeholder="Basic usage" />;
  const showPromiseConfirm = () => {
    confirm({
      title: 'Do you confirm the information you have entered ?',
      icon: <ExclamationCircleFilled />,
      content: '',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

    return (
      <>
      {/* İzin Türü Seçimi */}
      <div className="mt-6 sans-serif " >
        <div className="flex gap-6 justify-center grid-cols-4  text-base font-bold  leading-normal " >
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox" className=" rounded-xl"    />
            </div>
            <div className=" px-11  py-5 bg-teal-50 rounded-[20px] border border-stone-300  ">
              <div className=" text-center pt-2  text-emerald-400">Yıllık İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox"  className=" rounded-xl" />
            </div> 
            <div className=" px-11  py-5 bg-blue-100 rounded-[20px] border border-stone-300  ">
              <div className="text-center pt-2 text-blue-400 ">Ücretsiz İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox" className=" rounded-xl" />
            </div>
            <div className=" px-11  py-5 bg-yellow-50 rounded-[20px] border border-stone-300  ">
              <div className="text-center pt-2 text-amber-400">Mazaretli İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox"className=" rounded-xl" />
            </div>
            <div className=" px-11  py-5 bg-red-50 rounded-[20px] border border-stone-300  ">
              <div className="text-center pt-2 text-red-400 ">Hasta İzni</div>
            </div>
          </div>
        </div>

        {/* İzin Formu */}
        <div className="mt-[40px]" >
          <h1 className="  h-6 text-center text-black text-[22px] font-normal  leading-7" >
            İzin Formu
          </h1>
          
        </div>

        {/* İzin tarih seçimi */}
        <div>
          {/* İzin Başlangıç */}
          <div className="flex flex-col gap-2 mt-2 ">
            <div className="flex justify-center" >
              <label className=" text-blue-600 text-sm font-medium  leading-tight tracking-tight" >İzin Başlangıç Tarihi</label>
            </div>
            <div className="flex justify-center" >
              <Input className="rounded-md p-3 max-w-md " placeholder=". . / . . / . . . ."></Input>
            </div>
            {/* İzin Bitiş*/}
            <div className="flex flex-col gap-2 mt-2 ">
            <div className="flex justify-center" >
              <label className=" text-blue-600 text-sm font-medium  leading-tight tracking-tight" >İzin Bitiş Tarihi</label>
            </div>
            <div className="flex justify-center" >
              <Input className="rounded-md p-3 max-w-md " placeholder=". . / . . / . . . ."></Input>
            </div>

          </div>
        </div>

        </div>
        <div className="flex justify-center" >
          <div className=" bg-teal-50 rounded border border-stone-300 mt-6 px-[80px] py-3">
            <p className=" text-center text-zinc-900 text-base font-normal  " >
              Açıklama
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center mt-6 " >
            <textarea name="explanation"  cols="55" rows="5" className="rounded-md "  ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-6 " >
          <div className=" px-14 py-3.5 bg-blue-600 rounded-[20px] justify-center items-center">
              <button className=" text-white text-lg px-1.5  tracking-wide" onClick={showPromiseConfirm} > Talep Gönder </button>
          </div>
        </div>


      </div>   
      </>
    );
}

LeaveRequest.layout = page => <AuthenticatedLayout children={page} />

export default LeaveRequest;
