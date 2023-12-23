import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const MyLeaves = ({ auth }) => {

    return (
        <>
            Personel İzin Durum Sayfası
        </>
    );
};

MyLeaves.layout = (page) => <AuthenticatedLayout children={page} />;

export default MyLeaves;
