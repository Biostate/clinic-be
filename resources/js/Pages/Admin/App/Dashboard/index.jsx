import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";
import Calendar from '@/Components/Calendar';

const Dashboard = ({ auth }) => {
    return (
      <div>
          <Calendar />
      </div>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page} />

export default Dashboard;
