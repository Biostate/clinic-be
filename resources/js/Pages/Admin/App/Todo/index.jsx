import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

import React, { useState } from 'react';
import { PlusCircleOutlined,UserOutlined } from '@ant-design/icons';
import { Input,Button,Modal,Avatar, Space} from "antd";

import TodoListItem from "@/Components/TodoListItem";

const { Search } = Input;




const Todo = ({ auth }) => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex flex-col gap-5 p-6 font-sans  ">
                {/* header */}
                <div className="flex justify-between   ">
                    <div className="flex gap-4 items-center justify-between " >
                        <div className="mb-3" >
                            <h1 className="text-zinc-800 text-2xl font-semibold  leading-9 tracking-tight">
                                To-Do List
                            </h1>
                        </div>
                        <div className=" flex items-center " >
                            <button onClick={showModal} type="button" className=" px-5 py-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                <div className="flex gap-2" >
                                    <div >
                                        <p>Görev Ata</p>
                                    </div>
                                    <div>
                                        <PlusCircleOutlined />
                                    </div>
                                </div>
                            </button>

                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <h2 className="text-center text-neutral-800 text-3xl font-medium leading-9 tracking-tight">Task</h2>
                                <div className="flex flex-col my-2 " >
                                    <h2 className=" text-xl text-black  font-medium  tracking-tight" >Task Başlığı:</h2>
                                    <Input name="date"  className=" mt-2 rounded-md mb-2 " />
                                    <h2 className=" text-xl text-black  font-medium  tracking-tight" >Task İçeriği:</h2>
                                    <textarea name="content"  cols="10" rows="5" className="mt-2 rounded-md mb-2 " placeholder="Görev İçeriğini Giriniz" ></textarea>
                                    <h2 className=" text-xl text-black  font-medium  tracking-tight" >Katılımcılar:</h2>
                                        <div className="mx-4 my-2 " >
                                            <Space>
                                                <Avatar
                                                    style={{
                                                        backgroundColor: '#87d068',
                                                    }}
                                                    icon={<UserOutlined />}
                                                />
                                            </Space>
                                        </div>
                                    <div className="flex flex-col justify-center" >
                                        <label className="font-semibold" htmlFor="date">Task Son Tarihi:</label>
                                        <Input name="date" placeholder=". ./. ./. . . . "  className=" mt-2 rounded-md  " />
                                    </div>

                                </div>
                            </Modal>

                        </div>

                    </div>
                    <div>
                        <Search
                            placeholder="İş Adına Göre Ara"
                            allowClear
                            onSearch={onSearch}
                            style={{
                                width: 300,
                            }}
                        />
                    </div>
                </div>
                {/* Waiting */}
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            Waiting
                        </h2>
                    </div>
                    <TodoListItem squareColor="green" dateBackgroundColor="pink" dateTextColor="pink"   date="Son Gün" title="Satın Alımlar" />
                    <TodoListItem squareColor="green" dateBackgroundColor="violet" dateTextColor="violet"  date="Son 2 Gün" title="Aylık Müşteri Toplantılarının Planlanması" />
                    <TodoListItem squareColor="green" dateBackgroundColor="green" dateTextColor="green"  date="12/09/2023" title="Müşteri Geridönüşlerinin Sisteme Aktarılması" />
                    <TodoListItem squareColor="green" dateBackgroundColor="yellow" dateTextColor="yellow"  date="Son 4 Gün" title="Piknik Etkinliğinin Planlanması" />
                </div>
                {/* On-Process */}
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            On-Process
                        </h2>
                    </div>
                    <TodoListItem squareColor="violet" dateBackgroundColor="pink" dateTextColor="pink" date="Son Gün" title="Sendikadan Gelen Belgelerin İncelenmesi" />
                    <TodoListItem squareColor="violet" dateBackgroundColor="violet" dateTextColor="violet" date="Son 2 Gün" title="Üniversite Seminer Planlaması"  />
                    <TodoListItem squareColor="violet" dateBackgroundColor="green" dateTextColor="green"  date="12/09/2023" title="Stayjer Alımlarının Değerlendirilmesi" />
                    <TodoListItem squareColor="violet" dateBackgroundColor="yellow" dateTextColor="yellow" date="Son 4 Gün" title="Muhasebe Belgelerinin İletilmesi" />

                </div>
                {/* Pending */}
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            On-Process
                        </h2>
                    </div>
                    <TodoListItem squareColor="yellow" dateBackgroundColor="pink" dateTextColor="pink" date="Bitiş Tarihi " title="Yeni Sistem Entegrasyonu" />
                </div>

            </div>
        </>
    );
};

Todo.layout = (page) => <AuthenticatedLayout children={page} />;

export default Todo;
