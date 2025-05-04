import { injectContentInTemplate } from "../../utils/content/markdown/contentInjector";
import { getAllContentPaths } from "../../utils/content/markdown/paths";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<
  Array<{ slug: string[] }>
> {
  const paths = await getAllContentPaths();
  return paths.map((slugArray) => ({ slug: slugArray }));
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const fullHtml = await injectContentInTemplate(slug);
  if (!fullHtml) return notFound();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <article className="prose prose-neutral max-w-3xl mx-auto px-4">
        <div dangerouslySetInnerHTML={{ __html: fullHtml }} />
      </article>
    </div>
  );
}
