import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from '@/Components/Calendar';

const UserCreate = ({ auth }) => {
    return (
      <div>
          Kullanıcı ekleme sayfası aynı zamanda düzenleme için de kullanılabilir.
      </div>
    );
}

UserCreate.layout = page => <AuthenticatedLayout children={page} />

export default UserCreate;
