export default async function Blog() {

    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();

    return (
        <>
            <div>Hello Blog</div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}
