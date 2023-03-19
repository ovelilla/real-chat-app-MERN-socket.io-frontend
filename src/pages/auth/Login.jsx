import Header from "@features/auth/login/header";
import Body from "@features/auth/login/body";
import Form from "@features/auth/login/form";
import Footer from "@features/auth/login/footer";

const Login = () => {
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

export default Login;
