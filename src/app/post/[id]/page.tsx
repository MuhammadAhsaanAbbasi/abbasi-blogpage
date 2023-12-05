import Layout from "@/app/component/layout"
import Date from "@/app/component/date";
import Link from "next/link";
import Posts from "@/app/lib/post";


async function getPost(id:string) {
    const post=Posts.find(post=>post.id===id)
    return post
}

export async function generateStaticParams() {
    const ids: string[] = ["Rendering","ssd-ssr"]
    return ids.map((id)=>({id:id}))
}

export default async function Post({params}:{params:{id:string}}) {
        const {id} = params
        const post = await getPost(id)
    return (
        <Layout>
                {/* <div className="block w-[700px] my-6 m-auto justify-center items-center"> */}
                <div className="block w-[700px] my-6 m-auto justify-center items-center animate-wiggle">
                <title>{post!.id}</title>
                <h1 className='text-center font-bold text-3xl m-auto font-serif text-orange-500'>{post!.title}</h1>
                <br />
                <h2 className="font-['Times_New_Roman'] font-normal text-xl text-black my-1"><Date dateString={post!.date} /></h2>
                <p className='text-2xl font-medium font-serif text-white'>{post?.Content}</p>
                <br />
                <Link href="/" className="font-['Times_New_Roman'] font-normal text-xl text-black my-1 hover:underline">{"<- Back To Home"}</Link>
                </div>
            </Layout>
    )
}
