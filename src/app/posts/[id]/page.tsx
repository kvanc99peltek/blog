import { getPostById } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <Link 
        href="/" 
        className="text-white/50 hover:text-white mb-8 inline-block transition-colors"
      >
        ← Back to posts
      </Link>
      <article className="border border-white/10 rounded-lg p-8 bg-white/5">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">{post.title}</h1>
        <div className="text-white/50 mb-8 text-sm text-center border-b border-white/10 pb-4">
          By {post.author} • {post.date}
        </div>
        <div className="prose prose-invert prose-lg max-w-none">
          <div 
            className="text-white/80 leading-relaxed [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:mb-4 [&>pre]:bg-black/50 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  );
} 