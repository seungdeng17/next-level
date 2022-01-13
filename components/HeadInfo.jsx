import Head from "next/head";

export default function HeadInfo({
  title = "My Blog",
  keyword = "My Keyword",
  contents = "My Contents",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
}
