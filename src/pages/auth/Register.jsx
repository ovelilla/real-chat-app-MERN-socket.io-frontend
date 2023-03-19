import Header from "@features/auth/register/header";
import Body from "@features/auth/register/body";
import Form from "@features/auth/register/form";
import Footer from "@features/auth/register/footer";

const Register = () => {
    return (
        <>
            <Header />
            <Body>
                <Form />
            </Body>
            <Footer />
        </>
    );
};

export default Register;
