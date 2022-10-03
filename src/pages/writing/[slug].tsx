import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ListDetailView, SiteLayout } from "../../components/Layouts";
import PostDetail from "../../components/Writing/PostDetail";
import { PostsList } from "../../components/Writing/PostsList";
import { trpc } from "../../utils/trpc";

const WritingPostPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const postInfo = trpc.useQuery([
    "posts.postBySlug",
    { slug: slug as string },
  ]);

  return (
    <SiteLayout>
      <ListDetailView
        list={<PostsList />}
        hasDetail
        detail={<PostDetail postInfo={postInfo} />}
      />
    </SiteLayout>
  );
};

export default WritingPostPage;
