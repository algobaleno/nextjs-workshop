import { NextResponse } from "next/server";

export function proxy(req) {
    console.log("No Permission");
    // return NextResponse.redirect(new URL("/", req.url));
    return NextResponse.next();
}

export const config = {
    matcher: "/blog/:path*",
};