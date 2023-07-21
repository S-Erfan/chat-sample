import Head from "next/head";
import React from "react";

const HeadCustom = ({ children }) => {
  return (
    <Head>
      <title>ویستا</title>
      <meta name="description" content="ویستا" />
      <meta name="author" content="erfan hoseini" />
      {children}
    </Head>
  );
};

export default HeadCustom;
