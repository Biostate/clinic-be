import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from "@/Components/Calendar";
import { Flex } from "antd";
import { Input, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Search } = Input;

const todos = [
    {
        id: 1,
        title: "Meeting with CEO",
        date: "2021-04-01",
        status: "done",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.",
    },
];

const Todo = ({ auth }) => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <>
            {/* <Flex
                className="mb-4"
                justify={"space-between"}

            >
                <div>
                    <h1 className="font-bold text-xl">
                        Yapılacaklar
                    </h1>
                </div>
                <div>   
                    arama ve filtreleme 
                </div>  
            </Flex>
            <div>
                <div className="font-bold">YAPILACAK</div>
                <div>TODOS</div>
                <div className="font-bold">YAPILIYOR</div>
                <div>TODOS</div>
                <div className="font-bold">YAPILDI</div>
                <div>TODOS</div>
            </div> */}

            <div className="flex flex-col gap-5 p-6 font-['Inter']  ">
                {/* header */}
                <div className="flex justify-between   ">
                    <div>
                        <h1 className="text-zinc-800 text-2xl font-semibold  leading-9 tracking-tight">
                            To-Do List
                        </h1>
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
                <div className="flex flex-col  ">
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            Waiting
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3 mt-4 ">
                        {/* Satır */}
                        <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                            <div className="flex gap-3 mt-2 ">
                                <div class=" mt-[1px] w-3 h-3 bg-green-600 rounded-[3px]"></div>
                                <p className="text-zinc-800 text-xs font-semibold   leading-[18px] tracking-tight  ">
                                    Sonbahar Ortası Festivali etkinlik
                                    planlaması
                                </p>
                            </div>
                            <div className="mt-2">
                                <div class=" px-2 py-0.5 bg-pink-100 rounded-2xl ">
                                    <div class="text-pink-600 text-xs font-normal  leading-[18px] tracking-tight">
                                        Son gün
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
                        <div>
                            <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                <div className="flex gap-3 mt-2 ">
                                    <div class=" mt-[1px] w-3 h-3 bg-green-600 rounded-[3px]"></div>
                                    <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                        Sonbahar Ortası Festivali etkinlik
                                        planlaması
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <div class="  px-2 py-0.5 bg-violet-50 rounded-2xl ">
                                        <div class="text-violet-500 text-xs font-normal leading-[18px] tracking-tight">
                                            Son 2 gün
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
                        <div>
                            <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                <div className="flex gap-3 mt-2 ">
                                    <div class=" mt-[1px] w-3 h-3 bg-green-600 rounded-[3px]"></div>
                                    <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                        Sonbahar Ortası Festivali etkinlik
                                        planlaması
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <div class=" px-2 py-0.5 bg-emerald-50 rounded-2xl ">
                                        <div class="text-green-600 text-xs font-normal  leading-[18px] tracking-tight">
                                            12/09/2023
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
                        <div>
                            <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                <div className="flex gap-3 mt-2 ">
                                    <div class=" mt-[1px] w-3 h-3 bg-green-600 rounded-[3px]"></div>
                                    <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                        Sonbahar Ortası Festivali etkinlik
                                        planlaması
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <div class=" px-2 py-0.5 bg-amber-50 rounded-2xl ">
                                        <div class="text-amber-400 text-xs font-normal  leading-[18px] tracking-tight">
                                            Son gün
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
                </div>
                {/* On-Process */}
                <div>
                    <div className="flex flex-col  ">
                        <div>
                            <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                                On-Process
                            </h2>
                        </div>
                        <div className="flex flex-col gap-3 mt-4 ">
                            {/* Satır */}
                            <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                <div className="flex gap-3 mt-2 ">
                                    <div class=" mt-[1px] w-3 h-3 bg-violet-500 rounded-[3px]"></div>
                                    <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                        Sonbahar Ortası Festivali etkinlik
                                        planlaması
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <div class=" px-2 py-0.5 bg-pink-100 rounded-2xl ">
                                        <div class="text-pink-600 text-xs font-normal  leading-[18px] tracking-tight">
                                            Son gün
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
                            <div>
                                <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                    <div className="flex gap-3 mt-2 ">
                                        <div class=" mt-[1px] w-3 h-3 bg-violet-500 rounded-[3px]"></div>
                                        <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                            Sonbahar Ortası Festivali etkinlik
                                            planlaması
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <div class="  px-2 py-0.5 bg-violet-50 rounded-2xl ">
                                            <div class="text-violet-500 text-xs font-normal leading-[18px] tracking-tight">
                                                Son 2 gün
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
                            <div>
                                <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                    <div className="flex gap-3 mt-2 ">
                                        <div class=" mt-[1px] w-3 h-3 bg-violet-500 rounded-[3px]"></div>
                                        <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                            Sonbahar Ortası Festivali etkinlik
                                            planlaması
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <div class=" px-2 py-0.5 bg-emerald-50 rounded-2xl ">
                                            <div class="text-green-600 text-xs font-normal  leading-[18px] tracking-tight">
                                                12/09/2023
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
                            <div>
                                <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                                    <div className="flex gap-3 mt-2 ">
                                        <div class=" mt-[1px] w-3 h-3 bg-violet-500 rounded-[3px]"></div>
                                        <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                            Sonbahar Ortası Festivali etkinlik
                                            planlaması
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <div class=" px-2 py-0.5 bg-amber-50 rounded-2xl ">
                                            <div class="text-amber-400 text-xs font-normal  leading-[18px] tracking-tight">
                                                Son gün
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
                    </div>
                </div>
                {/* Pending */}
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            Pending
                        </h2>
                    </div>
                    <div className="mt-4">
                        <div className=" flex justify-around bg-neutral-50 p-3 rounded-[10px]">
                            <div className="flex gap-3 mt-2 ">
                                <div class=" mt-[1px] w-3 h-3 bg-yellow-400 rounded-[3px]"></div>
                                <p className="text-zinc-800 text-xs font-semibold  leading-[18px] tracking-tight  ">
                                    Sonbahar Ortası Festivali etkinlik
                                    planlaması
                                </p>
                            </div>
                            <div className="mt-2">
                            <div class=" px-2 py-0.5 bg-pink-100 rounded-2xl ">
                                        <div class="text-pink-600 text-xs font-normal  leading-[18px] tracking-tight">
                                            Bitiş Tarihi
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
            </div>
        </>
    );
};

Todo.layout = (page) => <AuthenticatedLayout children={page} />;

export default Todo;
