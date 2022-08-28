import React from "react";
import Head from "next/head";
import Bar from "./Bar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Example Store</title>
      </Head>
      <header>
        <Bar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
