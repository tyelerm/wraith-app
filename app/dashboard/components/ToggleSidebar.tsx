"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
export default function ToggleSidebar() {
    return (
        <Button
            variant="outline"
            className="block mt-1 ml-2 lg:hidden w-fit"
            onClick={() => document.getElementById("toggle-sidebar")?.click()}
        >
            <HamburgerMenuIcon />
        </Button>
    );
}
