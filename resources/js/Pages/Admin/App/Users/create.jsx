import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Calendar from '@/Components/Calendar';
import { Input, Button, Space } from 'antd';

const UserCreate = ({ auth }) => {
    return (
      <div>
        <div className="flex justify-start items-center">
          <div className="text-black text-[32px] font-semibold font-['Roboto']">
            <h1>Kullanıcı Oluştur</h1>
          </div>  
        </div>
        <div className="flex justify-center">
          <div >
            <img src="/assets/images/kayıt_olustur.svg" alt="Kullanici" />
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flex gap-8 justify-center">
            <div>
              <Input className="rounded-md p-3" placeholder="İsim"></Input>
            </div>
            <div>
              <Input className="rounded-md p-3" placeholder="Soyisim"></Input>
            </div>
          </div>
          <div className="flex justify-center">
              <Input className="rounded-md p-3 mt-5 max-w-md" placeholder="E-mail"></Input>
          </div>
          <div className="flex justify-center">
              <Input className="rounded-md p-3 mt-5 max-w-md" placeholder="Adres"></Input>
          </div>
          <div className="flex justify-center">
              <Input className="rounded-md p-3 mt-5 max-w-md" placeholder="Telefon"></Input>
          </div>
          <div className="flex justify-center">
              <Input.Password className="rounded-md p-3 mt-5 max-w-md" placeholder="Şifre" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}></Input.Password>
          </div>
          <div className="flex justify-center">
              <Input className="rounded-md p-3 mt-5 max-w-md" placeholder="Rol"></Input>
          </div>
          <div className="flex justify-center gap-10 mt-5 p-3">
            <Space size="middle">
              <Button className="rounded-full" >Güncelle</Button>
              <Button className="rounded-full" type="primary" danger>İptal</Button>
            </Space>
          </div>
        </div>
      </div>
    );
}

UserCreate.layout = page => <AuthenticatedLayout children={page} />

export default UserCreate;