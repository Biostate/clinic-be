import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from '@/Components/Calendar';
import {Flex} from "antd";

const todos = [
    {
        id: 1,
        title: 'Meeting with CEO',
        date: '2021-04-01',
        status: 'done',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.'
    },
    ];

const Todo = ({ auth }) => {


    return (
        <>
            <Flex
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
            </div>
        </>
    );
}

Todo.layout = page => <AuthenticatedLayout children={page} />

export default Todo;
