import React, {useEffect} from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input,Checkbox } from 'antd';
import {useForm} from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";


export default function Login({ status }){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const onChange = (e) => {
        setData('remember', e.target.checked)
    };

    return (
        <div className=' flex justify-center items-center h-screen  ' >
            <div className='flex gap-6 bg-sky-50 p-5 rounded-2xl ' >
                <div> 
                    <img src="/assets/images/login_left_side.png" className='rounded-xl' />
                </div>
                <div className='flex flex-col justify-between rounded-md gap-5'>
                    <div>   
                        <img src="/assets/images/Logo-International-clinics-01 1.svg" alt="group" />
                    </div>
                    <div className='text-center'>
                        <h1 className="text-zinc-800 text-[40px] font-semibold leading-[60px] tracking-tight" >
                            GİRİŞ
                        </h1>
                    </div>
                    <div className='flex flex-col gap-7' >
                        <div className=' justify-center' >
                            <label htmlFor="email">Email</label><br />  
                            <Input  className='p-2 mt-2 rounded-md  ' placeholder='Kayıtlı Email Adresini Giriniz' name='email' ></Input>
                        </div>
                        <div className=' justify-center' >
                            <label htmlFor="password">Şifre</label><br />
                            <Input  className='p-2 mt-2  rounded-md '  placeholder='Parola' name='password' ></Input>
                        </div>
                    </div>
                    <div className='flex justify-between px-3'>
                        <div>
                            <Checkbox onChange={onChange}>Beni Hatırla</Checkbox>
                        </div>
                        <div>
                            <a href="">Parolamı Unuttum</a>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-600 text-white rounded-xl p-2 w-1/2' >GİRİŞ YAP</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
