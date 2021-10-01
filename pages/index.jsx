/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link';
// import Browser from '../src/components/browser.jsx';
// import dynamic from 'next/dynamic';

// const BrowserComponent = dynamic(
//   () => import('../src/components/browser.jsx'),
//   {
//     ssr: false,
//     loading: () => <p>...</p>
//   }
// );

const Pages = ({ content }) => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
        {/* <BrowserComponent /> */}
      </div>
    </div>
  );
};

export function getStaticProps() {
  // get data from CMS

  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  };
};

export default Pages;