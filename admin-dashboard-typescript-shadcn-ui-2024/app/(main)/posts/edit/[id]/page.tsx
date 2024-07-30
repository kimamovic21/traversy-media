'use client'

import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import posts from '@/data/posts'
import BackButton from "@/components/BackButton"

const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required',
    }),
    body: z.string().min(1, {
        message: 'Body is required',
    }),
    author: z.string().min(1, {
        message: 'Author is required',
    }),
    date: z.string().min(1, {
        message: 'Date is required',
    }),
});

interface PostEditPageProps {
    params: {
        id: string;
    }
};

const PostsEditPage = ({ params }: PostEditPageProps) => {
  const post = posts.find((post) => post.id === params.id);
  console.log('post: ', post);   

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: post?.title || '',
        body: post?.body || '',
        author: post?.author || '',
        date: post?.date || '',
    }
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('data: ', data);
  };

  return (
    <>
        <BackButton text="Back To Posts" link="/posts" />
        <h3 className='text-2xl mb-4'>Edit Post</h3>
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(handleSubmit)}
                className='space-y-8'
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    {...field} 
                                    placeholder='Enter title' 
                                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                Body
                            </FormLabel>
                            <FormControl>
                                <Textarea 
                                    {...field} 
                                    placeholder='Enter body' 
                                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                Author
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    {...field} 
                                    placeholder='Enter author' 
                                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                Date
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    {...field} 
                                    placeholder='Enter date' 
                                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible: ring-offset-0'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className='w-full dark:bg-slate-800 dark:text-white'>
                    Update Post
                </Button>
            </form>
        </Form>
    </>
  )
}

export default PostsEditPage