import type { BlogPost } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardLargeProps {
  post: BlogPost;
}

export default function BlogPostCardLarge({ post }: BlogPostCardLargeProps) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
      <div className="md:col-span-5 lg:col-span-4">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative aspect-video md:aspect-square lg:aspect-video w-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint="lifestyle blog"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 33vw"
            />
          </div>
        </Link>
      </div>
      <div className="md:col-span-7 lg:col-span-8">
        <div>
          <Badge variant="secondary" className="mb-2 bg-orange-100 text-orange-600 hover:bg-orange-200 font-semibold">{post.category}</Badge>
          <h2 className="text-xl lg:text-2xl font-bold font-headline text-black mt-2 mb-3 group-hover:text-orange-500 transition-colors duration-300">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.date), 'dd MMMM, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>20 MINS</span>
            </div>
          </div>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-6">{post.description}</p>
          <Button asChild variant="outline" className="text-gray-600 hover:text-orange-500 h-auto group border-gray-300 font-bold hover:bg-gray-100 text-xs px-3 py-1.5">
            <Link href={`/blog/${post.slug}`}>
              READ MORE
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
