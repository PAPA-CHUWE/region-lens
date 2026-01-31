"use client";

import { Bell } from "lucide-react";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";

import SearchInput from "../search-ui/search-input";
import ProfileMenu from "../user-menu/profile-menu";

const TopBar = () => {
  return (
    <header className="h-14 w-full flex items-center justify-end px-6 bg-transparent">
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden sm:block">
          <SearchInput />
        </div>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="
            relative
           
            transition-colors duration-300
            hover:text-foreground
            dark:hover:text-white
          "
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent" />
        </Button>

        {/* Theme toggle */}
        <ModeToggle />

        {/* User menu */}
        <ProfileMenu />
      </div>
    </header>
  );
};

export default TopBar;
