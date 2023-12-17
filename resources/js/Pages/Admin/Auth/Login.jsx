import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Checkbox } from 'antd';
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function Login(){
    return (
        <div className="flex flex-row">
            <div className="flex max-h-screen w-6/12"> {/* Fotograf */}
                <img src="/assets/images/login_left_img.png" alt="login_img" />
            </div>
            <div className="flex justify-center"> {/* Ana bolum */}
                <div className="flex flex-col max-h-screen w-6/12 overflow-y-scroll justify-center"> {/* Ana bolum 2*/}
                    <div className="flex">
                        <div className="flex"> {/* Logo + yazi */}
                            <img src="/assets/images/Logo-International-clinics-01 1.svg" alt="group" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p class="text-2xl font-bold text-center">GIRIS</p>
                        <br />
                        <label>E-mail</label>
                        <Input size="large" placeholder="Kayitli e-mail adresinizi giriniz" prefix={<UserOutlined />} />
                        <br />
                        <label>Sifre</label>
                        <Input size="large" placeholder="Hesap parolanizi giriniz" prefix={<UserOutlined />} />
                        <br />
                        <div> 
                            <div className="flex justify-between">
                                <div> {/* Beni hatirla */}
                                    <Checkbox onChange={onChange}>Checkbox</Checkbox>    
                                </div> 
                                <div> {/* Parolami unuttum */}
                                    <p>Parolami unuttum</p>
                                </div>
                            </div>
                            <div class="w-full h-14 px-4 bg-green-600 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                <div class="grow shrink basis-0 text-center text-white text-base font-medium font-['Inter'] leading-normal tracking-tight">Giriş</div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div> 
        </div>
    );
}
