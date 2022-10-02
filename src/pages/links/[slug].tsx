import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ListDetailView, SiteLayout } from "../../components/Layouts";
import { LinksDetail } from "../../components/Links/LinksDetail";
import { LinksList } from "../../components/Links/LinksList";
import { trpc } from "../../utils/trpc";

const LinkDetailPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const linkInfo = trpc.useQuery([
    "links.linkBySlug",
    { slug: slug as string },
  ]);

  console.log("slug from link detial page: ", slug);
  console.log("linkInfo from link detail page: ", linkInfo);

  return (
    <SiteLayout>
      <ListDetailView
        list={<LinksList />}
        hasDetail
        detail={<LinksDetail linkInfo={linkInfo} />}
      />
    </SiteLayout>
  );
};

export default LinkDetailPage;
