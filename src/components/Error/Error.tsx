import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

type ErrorProps = {

};

const Error = ({}: ErrorProps) => {
    return (
        <>
            <Header/>
            <main className={'main error-page'}>
                <h1>Oops something went wrong 😢</h1>
            </main>
            <Footer/>
        </>
    );
};

export default Error;