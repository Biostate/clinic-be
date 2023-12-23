import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from "@/Components/Calendar";

import { Input, } from "antd";

import TodoListItem from "@/Components/TodoListItem";
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

const colorVariants = {
    bg_violet: 'bg-violet-50 ',
    bg_green: 'bg-green-50 ',
    bg_amber: 'bg-amber-50 ',
    bg_pink: 'bg-pink-50 ',
    
    violet: 'bg-violet-500 ',
    green: 'bg-green-600 ',
    yellow: 'bg-yellow-400 ',
    pink: 'bg-pink-600 ',

  }

const Todo = ({ auth }) => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <>
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
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            Waiting
                        </h2>
                    </div>
                    <TodoListItem date="Son Gün" />
                    <TodoListItem date="Son 2 Gün" />
                    <TodoListItem date="12/09/2023" />
                    <TodoListItem date="Son 4 Gün" />
                </div>
                {/* On-Process */}
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            On-Process
                        </h2>
                    </div>
                    <TodoListItem date="Son Gün" />
                    <TodoListItem date="Son 2 Gün"  />
                    <TodoListItem date="12/09/2023" />
                    <TodoListItem date="Son 4 Gün" />
                    
                </div>
                {/* Pending */}
                <div>
                    <div>
                        <h2 className="text-zinc-800 text-base font-semibold  leading-normal tracking-tight">
                            On-Process
                        </h2>
                    </div>
                    <TodoListItem date="Bitiş Tarihi " />
                </div>
                
            </div>
        </>
    );
};

Todo.layout = (page) => <AuthenticatedLayout children={page} />;

export default Todo;
