import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const Dashboard = ({ auth }) => {


    return (
      <div>
          Test
      </div>
    );
}

Dashboard.layout = page => <AuthenticatedLayout children={page} />

export default Dashboard;
