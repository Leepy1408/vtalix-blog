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

export default function BlogPostPage({ params }: { params: { slug:string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const popularPosts = blogPosts.filter(p => p.slug !== params.slug).slice(0, 4);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        <header className="mb-8 max-w-4xl">
          <span className="text-sm font-semibold text-primary tracking-wider">
            {post.category.toUpperCase()}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 my-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.authorImage} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>By <span className="font-semibold text-gray-900">{post.author}</span></span>
            <span className="hidden md:inline">|</span>
            <span className='hidden md:inline'>Published on {format(new Date(post.date), 'MMMM d, yyyy')}</span>
              <span className="hidden md:inline">|</span>
            <span className='hidden md:inline'>2 min read</span>
          </div>
        </header>
      </div>

      <div className="container mx-auto my-8 px-4">
        <div className="relative h-64 md:h-[550px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              data-ai-hint="food delicious"
              priority
              sizes="100vw"
            />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6" style={{whiteSpace: 'pre-wrap'}}>
                {post.content}
                <h2 className='text-3xl font-bold text-gray-900 mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                {post.content}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-gray-500 mb-4">POPULAR POSTS</h3>
                <div className="space-y-4">
                  {popularPosts.map(popularPost => (
                    <div key={popularPost.slug} className="flex items-center gap-4 group pb-4 border-b border-gray-200 last:border-b-0">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden shrink-0">
                        <Image src={popularPost.image} alt={popularPost.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary mb-1">{popularPost.category.toUpperCase()}</p>
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary leading-tight">
                          <Link href={`/blog/${popularPost.slug}`}>{popularPost.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <h3 className="font-bold text-lg text-gray-900">Get More Done Together With US</h3>
                  <p className="text-gray-600 mt-2 mb-4 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button variant="outline" className="bg-white border-primary/20 text-primary hover:bg-primary/5">Get Started</Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}