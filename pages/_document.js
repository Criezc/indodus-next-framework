import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* preconnect */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="canonical" href="https://indodusplas.com/" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
            rel="preload"
          />
          <link
            href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.807897349463!2d106.780227!3d-6.137155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc5c2316da52938f!2sIndodus%20Plas%20.CV!5e0!3m2!1sid!2sid!4v1601470865929!5m2!1sid!2sid"
            rel="preconnect"
          />
          <link href="vendor/remixicon/remixicon.css" rel="stylesheet" />
          {/* CSS Files  */}
          <link
            href="vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link href="css/style.css" rel="stylesheet" media="all" />
          <link href="vendor/aos/aos.css" rel="stylesheet" />
          {/* <link
            href="vendor/owl.carousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          /> */}
          <link href="vendor/venobox/venobox.css" rel="stylesheet" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
          <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="vendor/jquery.easing/jquery.easing.min.js"></script>
          <script src="vendor/waypoints/jquery.waypoints.min.js"></script>
          <script src="vendor/isotope-layout/isotope.pkgd.min.js"></script>
          {/* <script src="vendor/owl.carousel/owl.carousel.min.js"></script> */}
          <script src="vendor/aos/aos.js"></script>
          <script src="js/main.js"></script>
          <script src="vendor/venobox/venobox.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
