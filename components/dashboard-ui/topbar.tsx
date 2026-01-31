"use client";

import { Bell } from "lucide-react";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";

import SearchInput from "../search-ui/search-input";
import ProfileMenu from "../user-menu/profile-menu";

const TopBar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-full items-center justify-end px-6">
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
              className="relative transition-colors duration-300 hover:text-foreground dark:hover:text-white"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent" />
            </Button>

            {/* Theme toggle */}
            <ModeToggle />

            {/* User menu */}
            <ProfileMenu />
          </div>
        </div>
      </header>

      {/* Spacer so content starts below fixed topbar */}
      <div className="h-14" />
    </>
  );
};

export default TopBar;
