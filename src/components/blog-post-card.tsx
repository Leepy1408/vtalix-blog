import type { BlogPost } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col bg-white border border-gray-200 rounded-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint="technology abstract"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="secondary" className="mb-2 bg-orange-100 text-primary-orange hover:bg-orange-200 font-semibold">{post.category}</Badge>
          <CardTitle className="text-lg font-headline text-black group-hover:text-primary-orange leading-tight">{post.title}</CardTitle>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.authorImage} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-black">{post.author}</span>
              <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
