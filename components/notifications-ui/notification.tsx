"use client"

import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import NotificationContent from "./notification-content"


const NotificationBtn = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Notifications"
                    className="relative z-10 transition-colors duration-300 hover:text-foreground dark:hover:text-white"
                >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent" />
                </Button>
            </SheetTrigger>
            <NotificationContent />

        </Sheet>
    )
}

export default NotificationBtn
