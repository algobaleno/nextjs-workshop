import { Suspense } from "react";
import Loading from "./loading";
import { LB }  from "./loading";
import Image from "next/image";
 
export default function Post() {
   return (
        <>
            <div>Hello Post</div>
            <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200}></Image>
            <LB />
            <Suspense fallback={<Loading />}>
                <DynamicContent />
            </Suspense>
            
        </>
    );
}

async function DynamicContent() {
        const res = await fetch('http://localhost:3000/api/blog');
        const posts  = await res.json();
        return <div>{posts.map((post) => <ul key={post.id}><li>{post.title}</li> <li>{post.content}</li></ul>)}</div>;
}