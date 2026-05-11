import Link from "next/link";

export default function Home()
{
return (
    <div>
        <h1>
            Welcome to demo of next.js
        </h1>
        <Link href='/about'>About Us</Link>
        <br></br>
        <div className="flex gap-2 justify-center">
        <Link href='/components/courses'>courses</Link>
        <br></br>
        <Link href='/components/settings'>settings</Link>
        <br></br>
        <Link href='/components/students'>students</Link>
        </div>
    </div>
);
}