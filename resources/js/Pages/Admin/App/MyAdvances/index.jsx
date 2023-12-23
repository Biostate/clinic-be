import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const MyAdvances = ({ auth }) => {

    return (
        <>
            Personel Ödeme Durum Sayfası
        </>
    );
};

MyAdvances.layout = (page) => <AuthenticatedLayout children={page} />;

export default MyAdvances;
