import "./globals.css";
import "./global.queries.css";
import Link from "next/link";

export default function NotFound(){
    return(
        <>
        <h1>404-Page not found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href='/'>Return To Home!</Link>
        </>
    );
}