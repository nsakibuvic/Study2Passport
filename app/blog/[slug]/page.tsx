import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, blogPosts, getAllSlugs } from '@/lib/blogs';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts (good for build + SEO)
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per post
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Article Not Found | Study2Passport' };
  }

  return {
    title: `${post.title} | Study2Passport Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple content renderer: split on double newlines for paragraphs
  // Supports basic bullet points starting with • 
  const renderContent = (raw: string) => {
    const blocks = raw.trim().split(/\n\n+/);

    return blocks.map((block, index) => {
      const trimmed = block.trim();

      if (trimmed.startsWith('•')) {
        // Bullet list
        const items = trimmed.split('\n').filter(l => l.trim().startsWith('•')).map(l => l.replace(/^•\s*/, ''));
        return (
          <ul key={index} className="list-disc pl-6 space-y-1.5 mb-6 text-[15px] text-slate-700">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      }

      // Regular paragraph
      return (
        <p key={index} className="mb-5 text-[15px] leading-relaxed text-slate-700">
          {trimmed}
        </p>
      );
    });
  };

  // Related posts: same category or most recent others
  const related = blogPosts
    .filter(p => p.slug !== post.slug && (p.category === post.category || true))
    .slice(0, 3);

  const badgeClass = {
    'PhD': 'badge-phd',
    "Master's": 'badge-masters',
    'Undergraduate': 'badge-undergrad',
    'Visa': 'badge-visa',
    'General': 'badge-general',
  }[post.category];

  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between text-sm">
          <Link href="/blog" className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
            ← Back to all articles
          </Link>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=https://study2passport.com/blog/${post.slug}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 hidden sm:block"
          >
            Share on Facebook
          </a>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-10 pb-16">
        <div className={`inline-block mb-4 ${badgeClass}`}>{post.category}</div>

        <h1 className="text-4xl md:text-[42px] font-semibold tracking-[-1.1px] leading-[1.1] text-slate-900">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            })}
          </time>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>

        {/* Lead excerpt */}
        <p className="mt-6 text-xl leading-tight text-slate-600 font-light tracking-[-0.2px]">
          {post.excerpt}
        </p>

        {/* Main content */}
        <div className="prose-custom mt-10">
          {renderContent(post.content)}
        </div>

        {/* Author / CTA box */}
        <div className="mt-12 border-t pt-8">
          <div className="rounded-2xl bg-slate-50 p-7 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="flex-1">
              <div className="font-semibold">Was this helpful?</div>
              <p className="text-sm text-slate-600 mt-1">Many students who read our blog eventually work with us for personalized guidance.</p>
            </div>
            <div>
              <Link href="/contact" className="btn-primary whitespace-nowrap">Book a free consultation</Link>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-14">
          <div className="text-sm uppercase tracking-widest text-slate-500 font-medium mb-4">Continue Reading</div>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map(r => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card card-hover group">
                <div className={`badge mb-3 ${{
                  'PhD': 'badge-phd', "Master's": 'badge-masters', 'Undergraduate': 'badge-undergrad', 'Visa': 'badge-visa', 'General': 'badge-general'
                }[r.category]}`}>{r.category}</div>
                <div className="font-semibold text-base leading-snug tracking-tight group-hover:text-orange-600 transition-colors line-clamp-3">
                  {r.title}
                </div>
                <div className="text-xs text-orange-600 mt-4 font-medium">Read more →</div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Bottom bar */}
      <div className="bg-slate-950 text-slate-300 py-8">
        <div className="max-w-3xl mx-auto px-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-y-2">
          <div>Study2Passport Blog — Practical advice from real placements.</div>
          <Link href="/blog" className="text-orange-400 hover:text-orange-300">Browse all articles →</Link>
        </div>
      </div>
    </div>
  );
}
