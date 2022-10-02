import type { NextPage } from "next";
import { ListDetailView, SiteLayout } from "../components/Layouts";
import { Detail } from "../components/ListDetail/Detail";

function MissingPage() {
  return <Detail.Null />;
}

const Home: NextPage = () => {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<MissingPage />} />
    </SiteLayout>
  );
};

export default Home;
