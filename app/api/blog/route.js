export function GET() {
    return Response.json([
        {
            id: 1,
            title: "Title from GET Next.js API route ID 1",
            content: "Content from GET Next.js API route ID 1",
        },
        {
            id: 2,
            title: "Title from GET Next.js API route ID 2",
            content: "Content from GET Next.js API route ID 2",
        },
    ]);
}

export function POST() {
    return Response.json({
        message: "Hello from POST Next.js API route",
    })
}