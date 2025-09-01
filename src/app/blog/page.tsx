import { blogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ArrowUpRight, Calendar, User } from 'lucide-react';
import BlogPostCardLarge from '@/components/blog-post-card-large';

function FeaturedPost({ post }: { post: any }) {
  return (
    <div className="col-span-12 md:col-span-6 group">
      <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-2 text-center">
        <span className="text-xs font-bold text-gray-500">{post.category.toUpperCase()}</span>
        <h2 className="text-2xl md:text-3xl font-bold font-headline leading-tight group-hover:underline mt-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <User className="h-4 w-4" />
            <span>BY ADMIN</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(post.date), 'dd MMMM, yyyy')}</span>
          </div>
        </div>
        <p className="mt-4 text-gray-600 line-clamp-3">{post.description}</p>
      </div>
    </div>
  );
}

function SidePost({ post }: { post: any }) {
  return (
    <div className="group">
      <div className="relative h-48 w-full rounded-lg overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="mt-3">
        <span className="text-xs font-bold text-gray-500">{post.category.toUpperCase()}</span>
        <h3 className="text-lg font-bold font-headline text-black group-hover:underline leading-tight mt-1">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>BY ADMIN</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(post.date), 'dd MMMM, yyyy')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopStorySidebar({ post }: { post: any }) {
  return (
    <div className="flex gap-4 justify-between items-center group border-b border-gray-200 pb-4">
      <div>
        <span className="text-xs font-bold text-gray-500">{post.category.toUpperCase()}</span>
        <h4 className="font-semibold text-sm text-black group-hover:underline leading-tight">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h4>
        <p className="text-xs text-gray-500 mt-1">{format(new Date(post.date), 'dd MMMM, yyyy')}</p>
      </div>
      <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
    </div>
  );
}

function NumberedTopStory({ post, index }: { post: any; index: number }) {
  return (
     <div className="flex items-start gap-4 group border-b border-gray-200 pb-4">
        <span className="text-3xl font-bold text-gray-200">0{index + 1}</span>
        <div>
           <h4 className="font-semibold text-sm text-black group-hover:underline leading-tight">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
           </h4>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              <span>{format(new Date(post.date), 'd MMMM, yyyy')}</span>
            </div>
        </div>
     </div>
  );
}

function HotSpotCard({ post }: { post: any }) {
  return (
    <div className="group">
      <div className="relative h-48 w-full rounded-lg overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="mt-3">
         <span className="text-xs font-bold text-gray-500">{post.category.toUpperCase()}</span>
         <h3 className="text-md font-bold font-headline text-black group-hover:underline leading-tight mt-1">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
         </h3>
         <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>BY ADMIN</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{format(new Date(post.date), 'd MMMM, yyyy')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 3);
  const topStoriesHero = blogPosts.slice(0, 4);
  const numberedTopStories = blogPosts.slice(0, 5);
  const politicsPosts = blogPosts.filter(p => p.category === 'AI' || p.category === 'Security').slice(0, 4);
  const hotSpotPosts = blogPosts.slice(2, 5);
  const latestPosts = blogPosts.slice(0, 3);
  
  const mainPoliticsPost = politicsPosts[0];
  const otherPoliticsPosts = politicsPosts.slice(1);

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        
        {/* Top Section Grid */}
        <div className="grid grid-cols-12 gap-8 mb-12 items-start">
          {/* Side Posts */}
          <div className="col-span-12 md:col-span-3 space-y-8 md:order-1">
            {sidePosts.map(post => <SidePost key={post.slug} post={post} />)}
          </div>
          {/* Featured Post */}
          <div className="col-span-12 md:col-span-6 md:order-2">
            <FeaturedPost post={featuredPost} />
          </div>
          {/* Right Sidebar */}
          <aside className="col-span-12 md:col-span-3 space-y-8 md:order-3">
            <div>
              <h2 className="text-lg font-bold font-headline mb-4 text-black relative">
                <span className="absolute -top-1 left-0 h-0.5 w-10 bg-orange-500" />
                Top Stories
              </h2>
              <div className="space-y-4 pt-4">
                {topStoriesHero.map(post => <TopStorySidebar key={post.slug} post={post} />)}
              </div>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-12 gap-8">
            {/* Main Content Area */}
            <div className="col-span-12 lg:col-span-9">

                {/* Travelling Agents Banner */}
                <div className="relative h-48 md:h-32 rounded-lg overflow-hidden mb-12 bg-gray-100 flex items-center p-4 md:p-8">
                   <Image src="/img_1/a7f20d2dd05a08e6d6b0690cd0e0ef4e831d8cf6.jpg" data-ai-hint="travel snowy mountains" alt="Travel Banner" fill className="object-cover opacity-100" />
                   <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
                      <div className='text-center md:text-left'>
                        {/* <p className="text-teal-600 font-bold text-sm tracking-widest">TRAVELLING AGENTS</p> */}
                        {/* <p className='text-black font-bold text-2xl tracking-widest'>FOR YOUR</p> */}
                      </div>
                     {/* <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700 text-xs px-4 py-2 h-auto self-center md:self-auto">See Details</Button> */}
                   </div>
                </div>

                {/* Politics Section */}
                <section className="mb-12">
                   <div className="flex items-center mb-4">
                     <h2 className="text-xl font-bold font-headline text-black">Politics</h2>
                     <span className="h-1 w-10 bg-orange-500 ml-4"></span>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Main Politics Post - Left Column */}
                      <div className='group flex'>
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                          <div className="relative w-full sm:w-1/2 aspect-square rounded-lg overflow-hidden shrink-0">
                             <Image src={mainPoliticsPost.image} alt={mainPoliticsPost.title} fill className="object-cover" />
                          </div>
                          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                             <span className="text-xs font-bold text-gray-500">{mainPoliticsPost.category.toUpperCase()}</span>
                             <h3 className="text-lg font-bold font-headline text-black mt-1 group-hover:underline">
                                <Link href={`/blog/${mainPoliticsPost.slug}`}>{mainPoliticsPost.title}</Link>
                             </h3>
                             <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                   <User className="h-3 w-3" />
                                   <span>BY ADMIN</span>
                                </div>
                                <div className="flex items-center gap-1">
                                   <Calendar className="h-3 w-3" />
                                   <span>{format(new Date(mainPoliticsPost.date), 'd MMMM, yyyy')}</span>
                                </div>
                             </div>
                             <p className="text-gray-600 mt-2 text-sm line-clamp-3">{mainPoliticsPost.description}</p>
                             <Button asChild variant="outline" className="text-gray-600 mt-4 h-auto hover:underline text-xs font-bold hover:bg-gray-100 group border-gray-300">
                                <Link href={`/blog/${mainPoliticsPost.slug}`}>
                                   READ MORE 
                                   <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                             </Button>
                          </div>
                        </div>
                      </div>

                      {/* Other Politics Posts - Right Column */}
                      <div className='space-y-4 md:border-l border-gray-200 md:pl-8'>
                         {otherPoliticsPosts.map(post => (
                            <div key={post.slug} className='pb-4 group last:pb-0 border-b md:border-b-0 last:border-b-0'>
                               <h4 className='font-semibold text-black group-hover:underline text-md leading-tight'>
                                 <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                               </h4>
                               <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                                <Calendar className="h-3 w-3" />
                                <span>{format(new Date(post.date), 'd MMMM, yyyy')}</span>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </section>

                {/* Today's Hot Spot */}
                <section className="mb-12">
                    <div className="flex items-center mb-4">
                        <h2 className="text-xl font-bold font-headline text-black">Today's Hot Spot</h2>
                        <span className="h-1 w-10 bg-orange-500 ml-4"></span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {hotSpotPosts.map(post => <HotSpotCard key={post.slug} post={post} />)}
                    </div>
                </section>

                {/* Latest Articles Section */}
                <section>
                    <h2 className="text-xl font-bold font-headline mb-4 text-black"><span className="border-b-4 border-orange-500 pb-1">Latest Articles</span></h2>
                    <div className="space-y-8">
                        {latestPosts.map(post => <BlogPostCardLarge key={post.slug} post={post} />)}
                    </div>
                </section>
            </div>

            {/* Right Sidebar Continued */}
            <aside className="col-span-12 lg:col-span-3 space-y-8">
                <div className="bg-gray-50 p-4 rounded-lg hidden md:block">
                    <div className="relative h-40 w-full mt-4">
                       <Image src="https://placehold.co/300x200.png" data-ai-hint="shoes fashion" alt="Ad Offer" fill className="object-contain" />
                    </div>
                </div>
                <div>
                   <h2 className="text-lg font-bold font-headline mb-4 text-black"><span className="border-b-2 border-orange-500 pb-1 inline-block">Top Stories</span></h2>
                   <div className="space-y-4 pt-2">
                     {numberedTopStories.map((post, index) => <NumberedTopStory key={post.slug} post={post} index={index} />)}
                   </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}
