import  "../globals.css"
import Image from "next/image"
import Link from "next/link"

type IProp={
    children: React.ReactNode,
    seo?: React.ReactNode
}

export default function  Layout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <main>
        <div className="block w-[700px] h-auto my-6 m-auto justify-center items-center relative">
    <Image
        className="rounded-full border-[4px] border-solid border-white m-auto animate-wiggle"
        src={"/images/office 1.0.jpeg"}
        height={250}
        width={250}
        alt='My photo'
    />
    <h1 className='text-center font-bold text-3xl font-serif text-orange-500 animate-wiggle max-xl:justify-center max-xl:items-center'>
        Muhammd Ahsaan Abbasi
    </h1>
</div>
        {children}
    <div className="block w-[700px] my-6 justify-center items-center">
    <p className="text-2xl font-['Times_New_Roman'] font-semibold my-3 text-white  animate-wiggle">You can connect with me on Here</p>
      <p className="text-2xl font-['Times_New_Roman'] font-semibold my-3 text-white  animate-wiggle">Phone No: +92 349-204-7381</p>
      <p className="text-2xl font-['Times_New_Roman'] font-semibold my-3 text-white  animate-wiggle">Email: mahsaanabbasi@gmail.com</p>
    </div>
    <div className="flex my-6 items-center mb-3">
    <Link href={"https://www.facebook.com/ahsaan.abbasi.334"}>
    <Image
        className='h-10 w-10 hover:invert animate-wiggle hover:cursor-pointer'
        src={'/images/fb.png'}
        height={100}
        width={100}
        alt="insta"
        />
        </Link>
        <Link href={'https://www.instagram.com/m_ahsaan_abbasi/'}>
        <Image
        className='h-12 w-12 hover:invert animate-wiggle hover:cursor-pointer'
        src={'/images/insta.png'}
        height={100}
        width={100}
        alt="insta"
        />
        </Link>
        <Link href={'https://www.linkedin.com/in/muhammad-ahsaan-abbasi-995630263/'}>
        <Image
        className='h-12 w-12 hover:invert animate-wiggle hover:cursor-pointer'
        src={'/images/linkedin.png'}
        height={100}
        width={100}
        alt="insta"
        />
        </Link>
    </div>
        </main>
    )
}