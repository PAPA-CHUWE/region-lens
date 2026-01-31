"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-sm">
      {/* Icon */}
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      {/* Input */}
      <Input
        type="search"
        placeholder="Search regions, countries, indicators..."
        className="
          pl-10
          rounded-xl
          bg-background
          ring-ring ring-2
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-0
        "
      />
    </div>
  );
};

export default SearchInput;
