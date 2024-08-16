import Loading from "@/app/loading";
import { Suspense } from "react";

export const metadata = {
    title: "BlogReader | Aldor Technologies"
};

export default function BlogReaderLayout({ children }) {
    return (
        <div>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </div>
    )
}