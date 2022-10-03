import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";

import { Intro } from "../components/Home/Intro";
import { ListDetailView, SiteLayout } from "../components/Layouts";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Ben A Patton</title>
        <meta name="About Ben A Patton" content="About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <ListDetailView list={null} hasDetail detail={<Intro />} />
      </SiteLayout>
    </>
  );
};

export default About;
