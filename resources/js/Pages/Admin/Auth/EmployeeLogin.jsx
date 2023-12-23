import React, {useEffect} from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import {useForm} from "@inertiajs/react";
import InputError from "@/Components/InputError.jsx";


export default function EmployeeLogin({ status }){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    return (
        <div className="flex flex-row">
            <div className="flex max-h-screen"> {/* Fotograf */}
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
                    <div>
                        YÜZ TANIMA
                    </div>
                </div>
            </div>
        </div>
    );
}
