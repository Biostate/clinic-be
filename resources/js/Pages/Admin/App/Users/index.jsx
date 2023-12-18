import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from '@/Components/Calendar';

const Users = ({ auth }) => {
    return (
      <div>
          Kullanıcılar sayfası
      </div>
    );
}

Users.layout = page => <AuthenticatedLayout children={page} />

export default Users;
