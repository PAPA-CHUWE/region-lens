"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User2 } from "lucide-react";

type ProfileMenuProps = {
  initials?: string;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
};

const ProfileMenu = ({
  initials = "U",
  onProfile,
  onSettings,
  onLogout,
}: ProfileMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Account menu"
          className="rounded-full "
        >
          <Avatar size="lg" className="h-8 w-8 cursor-pointer">
            <AvatarFallback className="text-xs font-medium">
              <User2/>
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={onProfile}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onSettings}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onLogout}
          className="text-destructive focus:text-destructive"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
