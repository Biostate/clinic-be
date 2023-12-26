import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Button, Space } from 'antd';
import {useForm} from "@inertiajs/react";

const UserCreate = ({ user }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: user?.id,
        name: user?.name,
        email: user?.email,
        password: '',
        surname: user?.surname,
        address: user?.address,
        phone: user?.phone,
    });

    const formChanged = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        if (user) {
            post(route('admin.users.update', user.id));
        }else{
            post(route('admin.users.store'));
        }
    }

    return (
      <div>
        <div className="flex justify-start items-center">
          <div className="text-black text-[32px] font-semibold font-['Roboto']">
              <h1>{user ? "Kullanıcı Düzenle" : "Kullanıcı Oluştur"}</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <div >
            <img src="/assets/images/kayıt_olustur.svg" alt="Kullanici" />
          </div>
        </div>
          <form onSubmit={submit}>
              <div className="flex flex-col mt-5">
                  <div className="flex gap-8 justify-center">
                      <div>
                          <Input value={data.name} onChange={formChanged} id="name" name="name" className="rounded-md p-3" placeholder="İsim"></Input>
                      </div>
                      <div>
                          <Input value={data.surname} onChange={formChanged} id="surname" name="surname" className="rounded-md p-3" placeholder="Soyisim"></Input>
                      </div>
                  </div>
                  <div className="flex justify-center">
                      <Input value={data.email} onChange={formChanged} id="email" name="email" className="rounded-md p-3 mt-5 max-w-md" placeholder="E-mail"></Input>
                  </div>
                  <div className="flex justify-center">
                      <Input value={data.address} onChange={formChanged} id="address" name="address" className="rounded-md p-3 mt-5 max-w-md" placeholder="Adres"></Input>
                  </div>
                  <div className="flex justify-center">
                      <Input value={data.phone} onChange={formChanged} id="phone" name="phone" className="rounded-md p-3 mt-5 max-w-md" placeholder="Telefon"></Input>
                  </div>
                  <div className="flex justify-center">
                      <Input.Password onChange={formChanged} id="password" name="password" className="rounded-md p-3 mt-5 max-w-md" placeholder="Şifre" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}></Input.Password>
                  </div>
                  <div className="flex justify-center">
                      <Input value={data.roleId} onChange={formChanged} id="roleId" name="roleId" className="rounded-md p-3 mt-5 max-w-md" placeholder="Rol"></Input>
                  </div>
                  <div className="flex justify-center gap-10 mt-5 p-3">
                      <Space size="middle">
                          <Button htmlType="submit" className="rounded-full" >
                                {user ? "Güncelle" : "Kaydet"}
                          </Button>
                          <Button className="rounded-full" type="primary" danger>İptal</Button>
                      </Space>
                  </div>
              </div>
          </form>
      </div>
    );
}

UserCreate.layout = page => <AuthenticatedLayout children={page} />

export default UserCreate;
