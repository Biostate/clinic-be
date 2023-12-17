import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const LeaveRequest = ({ auth }) => {


    return (
      <div>
          İzin Talebi sayfa
      </div>
    );
}

LeaveRequest.layout = page => <AuthenticatedLayout children={page} />

export default LeaveRequest;
