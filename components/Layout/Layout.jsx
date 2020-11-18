import Head from "next/head";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Feautures from "./Feautures/Feautures";
import Products from "./Product/Product";
import Cta from "./Cta/Cta";
import Portfolio from "./Portfolio/Portfolio";
import Counts from "./Counts/Counts";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Layout({ children, title = "CV.Indodus Plas" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#444444" />
        <meta
          content="perusahaan packaging yang berspesialis di bidang Corrugated Box"
          name="description"
        />
        <meta content="karton box dan kardus murah" name="keywords" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Indodus Plas" />
      </Head>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Feautures />
        <Products />
        <Cta />
        <Portfolio />
        <Counts />
        <Testimonials />
        <Contact />
        <Footer />
        {children}
      </main>
    </>
  );
}
