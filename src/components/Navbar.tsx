'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"; // Removed unused ProductItem
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 select-none", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"} passHref>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>

                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-red-600">
                        <HoveredLink href="/courses">Check-courses</HoveredLink>
                        <HoveredLink href="/design-principles">Design-principles</HoveredLink>
                        <HoveredLink href="/blogs">Blogs</HoveredLink>
                        <HoveredLink href="/docs">Docs</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/contact"} passHref>
                    <MenuItem setActive={setActive} active={active} item="Contact" />
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
