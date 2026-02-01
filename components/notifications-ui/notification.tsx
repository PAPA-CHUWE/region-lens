"use client"

import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import NotificationContent from "./notification-content"

const NotificationBtn = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="
            group relative z-10
            transition-colors duration-300
            hover:text-foreground dark:hover:text-white
          "
        >
          <Bell className="h-5 w-5" />

          {/* Notification dot on border */}
          <span
            className="
              absolute top-0.5 right-0.5
              h-2 w-2 rounded-full
              translate-x-1/2 -translate-y-1/2
              bg-accent
              transition-colors duration-200
              group-hover:bg-foreground/80
            "
          />
        </Button>
      </SheetTrigger>

      <NotificationContent />
    </Sheet>
  )
}

export default NotificationBtn
