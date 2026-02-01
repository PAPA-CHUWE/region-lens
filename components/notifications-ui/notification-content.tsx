import React from "react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"

const NotificationContent = () => {
  return (
    
    <SheetContent side="right" className="w-[340px] sm:w-[420px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>Recent updates and alerts</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-3">
      <div className="rounded-lg border p-3">
        <p className="text-sm font-medium">New report available</p>
        <p className="text-xs text-muted-foreground">
          Your regional summary finished processing.
        </p>
      </div>

      <div className="rounded-lg border p-3">
        <p className="text-sm font-medium">System update</p>
        <p className="text-xs text-muted-foreground">
          Dashboard components were updated successfully.
        </p>
      </div>

      <div className="rounded-lg border p-3">
        <p className="text-sm font-medium">Welcome!</p>
        <p className="text-xs text-muted-foreground">
          You can manage notifications from Settings.
        </p>
      </div>
    </div>
      </SheetContent>
    
  )
}

export default NotificationContent
