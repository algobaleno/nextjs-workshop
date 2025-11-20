export default async function BlogID({ params }) {
    
    const { id } = await params
      
    return (
        <>
        <div>Hello Blog { id }</div>
        </>
    );
}
