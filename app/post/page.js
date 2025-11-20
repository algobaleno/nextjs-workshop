import { Suspense } from "react";
import Loading from "./loading";
import Image from "next/image";
 
export default function Post() {
   return (
        <>
            <div>Hello Post</div>
            <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200}></Image>
            <Suspense fallback={<Loading />}>
                <DynamicContent />
            </Suspense>
            
        </>
    );
}

async function DynamicContent() {
        const res = await fetch('http://jsonplaceholder.typicode.com/posts');
        const posts  = await res.json();
        return <div>{posts.map((post) => <ul key={post.id}><li>{post.title}</li><li>{post.content}</li></ul>)}</div>;
}