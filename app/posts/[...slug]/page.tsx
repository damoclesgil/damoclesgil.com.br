import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { formatDate } from "@/utils/formatDate";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    // NotFGound()
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - Dâmocles Gil Marçal` ,
    description: post.description,
    openGraph: {
      type: "article",
      url: `https://damoclesgil.com.br${post.slug}`,
      title: post.title,
      description: post.description,
      images: [
        {
          url: "https://damoclesgil.com.br/damoclesgil_og.png",
          width: 1200,
          height: 630,
          alt: "Dâmocles Gil Marçal"
        }
      ]
    }
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      {/* {JSON.stringify(post)} */}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
      <p className="text-right mt-6 text-sm">posted in: {formatDate(post.date)}</p>
    </article>
  );
}
