import Header from "../components/header";
import Footer from "../components/footer";
import { Fragment } from "react";
// import HeadContent from "./head-content/HeadContent";

const Layout = (props) => {
    return (
        <Fragment>
            {/* <HeadContent title={props.title} description={props.description} keywords={props.keywords} /> */}
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    )
}

export default Layout;