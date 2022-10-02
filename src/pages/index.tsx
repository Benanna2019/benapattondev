import type { NextPage } from "next";
import Head from "next/head";
import { Intro } from "../components/Home/Intro";
import { ListDetailView, SiteLayout } from "../components/Layouts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ben A Patton</title>
        <meta
          name="Ben Patton Digital Garden"
          content="Digital Garden for all writing, essays, links & mind dumps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteLayout>
        <ListDetailView list={null} hasDetail={false} detail={<Intro />} />
      </SiteLayout>
    </>
  );
};

export default Home;
