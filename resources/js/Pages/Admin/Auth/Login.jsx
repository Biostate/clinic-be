import React, {useEffect} from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Checkbox } from 'antd';
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

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                    <form onSubmit={submit}>
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold text-center">GİRİŞ</p>
                            <br />
                            <label>E-mail</label>
                            <Input
                                size="large"
                                placeholder="örn: admin@clinic.com"
                                prefix={<UserOutlined />}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                type="email"
                                name="email"
                            />
                            <InputError message={errors.email} className="mt-2" />
                            <br />
                            <label>Parola</label>
                            <Input
                                size="large"
                                placeholder="Parola"
                                prefix={<UserOutlined />}
                                type="password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                            <br />
                            <div>
                                <div className="flex justify-between">
                                    <div> {/* Beni hatirla */}
                                        <Checkbox onChange={onChange}>Beni Hatırla</Checkbox>
                                    </div>
                                    <div> {/* Parolami unuttum */}
                                        <p>Parolamı Unuttum(WIP)</p>
                                    </div>
                                </div>
                                <button disabled={processing} className="mt-5 w-full h-14 px-4 bg-green-600 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                    <div className="grow shrink basis-0 text-center text-white text-base font-medium leading-normal tracking-tight">
                                        GİRİŞ YAP
                                    </div>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
