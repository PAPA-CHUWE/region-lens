"use client";

import { Bell } from "lucide-react";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";

import SearchInput from "../search-ui/search-input";
import ProfileMenu from "../user-menu/profile-menu";
import NotificationBtn from "../notifications-ui/notification";

const TopBar = () => {
  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50 h-14
         bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60
          md:left-56 md:w-[calc(100%-14rem)]
        "
      >
        <div className="flex h-full items-center justify-end px-6">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <SearchInput />
            </div>

            <NotificationBtn/>

            <ModeToggle />
            <ProfileMenu />
          </div>
        </div>
      </header>

      {/* spacer so content starts below the fixed header */}
      <div className="h-14" />
    </>
  );
};

export default TopBar;
