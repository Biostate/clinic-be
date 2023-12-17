import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const AdvanceRequest = ({ auth }) => {


    return (
      <div>
          Avans talebi sayfası
      </div>
    );
}

AdvanceRequest.layout = page => <AuthenticatedLayout children={page} />

export default AdvanceRequest;
