import React, { Children } from 'react'
import { Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function TodoListItem(props) {

    const squareColorProp = props.squareColor;
    const dateBackgroundColorProp = props.dateBackgroundColor;
    const dateTextColorProp = props.dateTextColor;
    const squareColor = squareColorProp === 'green' ? 'bg-green-600' : squareColorProp === 'violet' ? 'bg-violet-500 ' :squareColorProp ==='yellow' ? 'bg-yellow-400': 'bg-blue-100';
    const dateBackgroundColor = dateBackgroundColorProp === 'green' ? 'bg-emerald-50' : dateBackgroundColorProp === 'violet' ? 'bg-violet-50' :dateBackgroundColorProp ==='yellow' ? 'bg-amber-50': dateBackgroundColorProp ==='pink' ? 'bg-pink-100':'bg-pink-100';
    const dateTextColor = dateTextColorProp === 'green' ? 'text-emerald-600' : dateTextColorProp === 'violet' ? 'text-violet-500' :dateTextColorProp ==='yellow' ? 'text-amber-400': dateTextColorProp ==='pink' ? 'text-pink-600':'bg-blue-100';
  return (
    <div>

        <div className="flex flex-col gap-3 mt-4 ">
            {/* Satır */}
            <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                <div className="flex gap-3 mt-2 ">
                    <div className={` mt-[1px] w-3 h-3  ${squareColor} rounded-[3px]`}></div>
                    <p className="text-zinc-800 text-xs font-semibold   leading-[18px] tracking-tight  ">
                        {props.title}
                    </p>
                </div>
                <div className="mt-2">
                    <div className= {`px-2 py-0.5 ${dateBackgroundColor} rounded-2xl `}>
                        <p className={` text-xs font-normal ${dateTextColor} leading-[18px] tracking-tight`}>
                            {props.date}
                        </p>
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
