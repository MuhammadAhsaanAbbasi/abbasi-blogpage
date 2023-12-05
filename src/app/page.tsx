import Layout from "./component/layout";
import { Metadata } from "next";
import Link from "next/link";
import Posts from "./lib/post";
import Date from "./component/date";

type Post = {
  id:string,
  title:string,
  date:string
}

export default function Home() {
  return (
    <>
    <Layout> 
      <section className="block w-[700px] my-6 m-auto justify-center items-center max-xl:justify-center">
        <h2 className='text-center font-bold text-3xl font-serif text-orange-500 animate-wiggle max-xl:justify-center max-xl:text-center'>Welcome to NextJs</h2>
          <p className="text-2xl font-['Times_New_Roman'] font-semibold my-3 text-white animate-wiggle">Hey, My self Muhammad Ahsaan Abbasi. I am a passionate web developer and programmer. Tech enthusiast</p>
      <p className="text-2xl font-['Times_New_Roman'] font-semibold my-3 text-white  animate-wiggle">Innovative Frontend Developer || Expert in Modern Technologies || Transforming Visions into Immersive Digital Experiences || HTML || CSS || TypeScript || Node Js || React Js || Next Js || Tailwind CSS || Block-Chain</p>
  </section>
  <section className="block w-[700px] my-6 m-auto justify-center items-center max-xl:justify-center max-xl:items-center animate-wiggle">
        <h2 className='font-bold text-2xl font-serif'>Blog</h2>
    <ul className="text-2xl font-['Times_New_Roman'] font-light my-6">
        {Posts.map(({id,date,title}:Post)=>(
          <li key={id}>
          <Link href={`/post/${id}`} className="text-white hover:underline">{title}</Link>
          <br />
          <small className="font-['Times_New_Roman'] font-normal text-xl text-black my-1">
            <Date dateString={date}/>
          </small>
          </li>
))}
    </ul>
      </section>
  </Layout>
    </>
  )
}
