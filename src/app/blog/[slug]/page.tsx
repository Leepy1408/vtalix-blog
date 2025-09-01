import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const popularPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* HEADER */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-16 lg:pt-24">
        <header className="mb-7 max-w-2xl">
          <span className="text-xs text-[#115FD6] tracking-wider">
            {post.category.toUpperCase()}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl text-[#172B4D] my-4 tracking-wide mb-10 lg:mb-20">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-[#172B4D] text-sm md:text-[15px]">
            <Avatar className="h-10 w-10 md:h-11 md:w-11 rounded-none">
              <AvatarImage src={post.authorImage} alt={post.author} />
              <AvatarFallback className="rounded-none">{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>
              By <span className="ml-1 text-[#172B4D]">{post.author}</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">
              Published on {format(new Date(post.date), 'MMMM d, yyyy')}
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">2 min read</span>
          </div>
        </header>
      </div>

      {/* FEATURE IMAGE */}
      <div className="container mx-auto my-6 md:my-8 px-6 md:px-12 lg:px-24">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-[550px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article>
              <div
                className="prose prose-sm md:prose-lg max-w-none font-400 text-black leading-relaxed space-y-6 md:space-y-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Popular Posts */}
              <div>
                <h3 className="text-xs tracking-widest text-gray-500 mb-4">POPULAR POSTS</h3>
                <div className="space-y-4">
                  {popularPosts.map((popularPost) => (
                    <div
                      key={popularPost.slug}
                      className="flex items-center gap-4 group pb-4 border-b border-[#172B4D] last:border-b-1"
                    >
                      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-md overflow-hidden shrink-0">
                        <Image
                          src={popularPost.image}
                          alt={popularPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] md:text-xs font-bold text-[#42526E] mb-1">
                          {popularPost.category.toUpperCase()}
                        </p>
                        <h4 className="text-base md:text-[19px] text-[#172B4D] group-hover:text-primary leading-tight">
                          <Link href={`/blog/${popularPost.slug}`}>{popularPost.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#FCA130] p-6 md:p-10 lg:p-12 w-full lg:w-[445px] h-auto lg:h-[352px] rounded-[4px] text-center">
                <h3 className="text-xl md:text-2xl font-normal text-white leading-[30px] md:leading-[36px]">
                  Get More Done Together With US
                </h3>
                <p className="text-white font-normal mt-2 leading-[28px] md:leading-[33px] text-base md:text-[22px] mb-8 md:mb-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button
                  variant="outline"
                  className="bg-[#DEEBFF] border-primary/20 text-sm md:text-[16px] h-[40px] md:h-[44px] w-[140px] md:w-[162.84px] text-[#091E42] hover:bg-primary/5"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
