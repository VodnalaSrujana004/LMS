"use client";

import { Span } from "next/dist/trace";
import { useRouter } from "next/navigation";



//import { redirect } from "next/dist/server/api-utils";

interface LoginButtonProps {
    children : React.ReactNode;
    mode?: "modal" | "redirect",
    asChild? : boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
const router = useRouter();

    const onClick=() => {
        router.push("/auth/login");
    };

    if (mode ==="modal"){
        return (
            <span>
                TODO : Implement modal
            </span>
        )
    }




    return (
        <span onClick={onClick} className="cursor-pointer">
        {children}
        </span>
    );
};

