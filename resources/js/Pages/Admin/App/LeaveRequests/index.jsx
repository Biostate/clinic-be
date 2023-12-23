import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const LeaveRequests = ({ auth }) => {

    return (
      <>
        İzinleri listeleme sayfası
      </>
    );
}

LeaveRequests.layout = page => <AuthenticatedLayout children={page} />

export default LeaveRequests;
