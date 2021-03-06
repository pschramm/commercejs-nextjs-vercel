// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/react-id-swiper@2.4.0/lib/react-id-swiper.min.js"></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />
          <meta property="og:title" content="Shadowplay Relics | Demo storefront" />
          <meta property="og:image" content="https://i.ibb.co/m8dVzrG/demo-preview-2.png" />
          <meta property="og:description" content="Shadowplay Relics | Demo storefront - A custom, open source demo storefront built with Commerce.js, Next.js and deployed to Vercel. Take a look!" />
          <meta property="og:url" content="https://commercejs-vercel-demo-store.now.sh" />
          <meta property="twitter:title" content="Shadowplay Relics | Demo storefront" />
          <meta name="twitter:creator" content="@shadowplayrelics" />
          <meta property="twitter:image" content="https://i.ibb.co/m8dVzrG/demo-preview-2.png" />
          <meta property="twitter:description" content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
