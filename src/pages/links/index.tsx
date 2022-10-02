import type { NextPage } from "next";
import { ListDetailView, SiteLayout } from "../../components/Layouts";
import { LinksList } from "../../components/Links/LinksList";

const LinksPage: NextPage = () => {
  return (
    <SiteLayout>
      <ListDetailView list={<LinksList />} hasDetail detail={null} />
    </SiteLayout>
  );
};

export default LinksPage;
