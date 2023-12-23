import React, { Children } from 'react'
import { Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function TodoListItem(props) {
  return (
    <div>
       
        <div className="flex flex-col gap-3 mt-4 ">
            {/* Satır */}
            <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                <div className="flex gap-3 mt-2 ">
                    <div className=" mt-[1px] w-3 h-3 bg-green-600 rounded-[3px]"></div>
                    <p className="text-zinc-800 text-xs font-semibold   leading-[18px] tracking-tight  ">
                        Sonbahar Ortası Festivali etkinlik
                        planlaması
                    </p>
                </div>
                <div className="mt-2">
                    <div className=" px-2 py-0.5 bg-pink-100 rounded-2xl ">
                        <div className=" text-xs font-normal  leading-[18px] tracking-tight">
                            {props.date}
                        </div>
                    </div>
                </div>
                <div className="flex gap-6 ">
                    <p className="mt-1">Atanan Kişi</p>
                    <Space>
                        <Avatar
                            style={{
                                backgroundColor: "#87d068",
                            }}
                            icon={<UserOutlined />}
                        />
                    </Space>
                </div>
            </div> 
        </div>                   
    </div>
  )
}

export default TodoListItem