import { Fragment } from 'react';
import HeadWrapper from '../singleton/headWrapper';
import '../styles/globals.css';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <HeadWrapper componentName={Component.name} />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
