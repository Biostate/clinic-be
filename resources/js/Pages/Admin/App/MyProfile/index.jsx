import AuthenticatedLayout from "@/Pages/Admin/Layout/AuthenticatedLayout.jsx";

const MyProfile = ({ auth }) => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <>
            Profilim Sayfası
        </>
    );
};

MyProfile.layout = (page) => <AuthenticatedLayout children={page} />;

export default MyProfile;
