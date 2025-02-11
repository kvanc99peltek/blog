import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-12 text-white text-center">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Link href={`/posts/${post.id}`} className="group block">
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-white/80 text-center">
                {post.title}
              </h2>
              <div className="text-white/50 mb-4 text-sm text-center border-b border-white/10 pb-4">
                By {post.author} • {post.date}
              </div>
              <p className="text-white/70 leading-relaxed text-center mb-4">
                {post.excerpt}
              </p>
              <div className="text-white/70 group-hover:text-white transition-colors text-center inline-block border border-white/20 rounded-full px-4 py-1 text-sm hover:border-white/40">
                Read more →
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
