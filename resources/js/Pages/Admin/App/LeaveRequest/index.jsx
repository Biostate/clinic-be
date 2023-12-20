import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { Input } from 'antd';

const LeaveRequest = ({ auth }) => {

  const App = () => <Input placeholder="Basic usage" />;

    return (
      <>
      {/* İzin Türü Seçimi */}
      <div className="mt-6  " >
        <div className="flex gap-6 justify-center grid-cols-4  " >
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox" className=" rounded-xl"    />
            </div>
            <div className=" px-11  py-5 bg-teal-50 rounded-[20px] border border-stone-300  ">
              <div className=" text-center pt-2  text-emerald-400 text-base font-bold font-['Noto Sans'] leading-normal">Yıllık İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox"  className=" rounded-xl" />
            </div> 
            <div className=" px-11  py-5 bg-blue-100 rounded-[20px] border border-stone-300  ">
              <div className="text-center pt-2 text-blue-400 text-base  font-bold font-['Noto Sans'] leading-normal">Ücretsiz İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox" className=" rounded-xl" />
            </div>
            <div className=" px-11  py-5 bg-yellow-50 rounded-[20px] border border-stone-300  ">
              <div className="text-center pt-2 text-amber-400 text-base font-bold font-['Noto Sans'] leading-normal">Mazaretli İzin</div>
            </div>
          </div>
          <div className=" flex flex-col gap-6  " >
            <div className="flex justify-center" >
                <input type="checkbox"className=" rounded-xl" />
            </div>
            <div className=" px-11  py-5 bg-red-50 rounded-[20px] border border-stone-300  ">
              <div className="text-center pt-2 text-red-400 text-base font-bold font-['Noto Sans'] leading-normal">Hasta İzni</div>
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
        <div>
          {/* İzin Başlangıç */}
          <div className="flex flex-col gap-2 mt-2 ">
            <div className="flex justify-center" >
              <label className=" text-blue-600 text-sm font-medium font-['DM Sans'] leading-tight tracking-tight" >İzin Başlangıç Tarihi</label>
            </div>
            <div className="flex justify-center" >
              <Input className="rounded-md p-3 max-w-md " placeholder=". . / . . / . . . ."></Input>
            </div>
            {/* İzin Bitiş*/}
            <div className="flex flex-col gap-2 mt-2 ">
            <div className="flex justify-center" >
              <label className=" text-blue-600 text-sm font-medium font-['DM Sans'] leading-tight tracking-tight" >İzin Bitiş Tarihi</label>
            </div>
            <div className="flex justify-center" >
              <Input className="rounded-md p-3 max-w-md " placeholder=". . / . . / . . . ."></Input>
            </div>

          </div>
        </div>

        </div>
        <div className="flex justify-center" >
          <div className=" bg-teal-50 rounded border border-stone-300 mt-6 px-[80px] py-3">
            <p className=" text-center text-zinc-900 text-base font-normal font-['DM Sans'] " >
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
          <div className="SignUp w-[280px] h-[49px] p-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
            <div className="Text px-1.5 justify-start items-start gap-2.5 flex">
              <div className="Button text-white text-lg font-normal font-['DM Sans'] leading-normal tracking-wide"> Talep Gönder </div>
            </div>
          </div>
        </div>


      </div>   
      </>
    );
}

LeaveRequest.layout = page => <AuthenticatedLayout children={page} />

export default LeaveRequest;
