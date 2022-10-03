import type { NextPage } from "next";
import Head from "next/head";
import { ListDetailView, SiteLayout } from "../../components/Layouts";
import { PostsList } from "../../components/Writing/PostsList";

const WritingIndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Writing - Ben A Patton</title>
        <meta
          name="Writing"
          content="Thoughts on tech, philosophy, work, idenity, etc, etc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full min-h-screen flex-col">
        <SiteLayout>
          <ListDetailView
            hasDetail={false}
            detail={null}
            list={<PostsList />}
          />
        </SiteLayout>
      </div>
    </>
  );
};

export default WritingIndexPage;

// Since <PostsList /> will always have the same data, we can load posts in the root and pass it in
// the useMatches, the same way we do it with the useUser() and useOptionalUser()
