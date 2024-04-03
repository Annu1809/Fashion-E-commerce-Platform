import PropTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({children, title}) {
    return (
        <div>
            <Helmet>
                <meta charSet="UTF-8" />
                {/* <meta name="description" content={description}/>
                <meta name="keywords" content={keyword} />
                <meta name="author" content={author} /> */}
                <title>{title}</title>
            </Helmet>
            <Header />
            <ToastContainer className=" mt-16"/>
            <main className=' h-screen'>{children}</main>
            <Footer />
        </div>
    )
}
Layout.propTypes = {
    title: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    // keyword: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};


export default Layout
