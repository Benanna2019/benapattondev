import type { NextPage } from "next";
import * as React from "react";

import { Intro } from "../components/Home/Intro";
import { ListDetailView, SiteLayout } from "../components/Layouts";

const About: NextPage = () => {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<Intro />} />
    </SiteLayout>
  );
};

export default About;
