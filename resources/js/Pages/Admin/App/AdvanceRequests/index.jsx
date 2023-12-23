import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const AdvanceRequests = ({ auth }) => {

    return (
      <>
        Avanları listeleme sayfası
      </>
    );
}

AdvanceRequests.layout = page => <AuthenticatedLayout children={page} />

export default AdvanceRequests;
