import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const Settings = () => {
  return (
    <div className="flex gap-6">
      {/* Left settings nav */}
      <aside className="hidden w-56 shrink-0 rounded-xl border bg-card/80 p-4 md:block">
        <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
          Settings
        </h3>

        <nav className="space-y-1">
          {[
            "General Information",
            "Preferences",
            "Security",
            "Notifications",
            "Account",
            "Billing",
          ].map((item, i) => (
            <button
              key={item}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition
                ${
                  i === 0
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Right content */}
      <section className="flex-1 rounded-xl border bg-card/80 p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">General Information</h1>
            <p className="text-sm text-muted-foreground text-wrap md:px-0 px-2">
              Update your profile and organization details
            </p>
          </div>

          <div className="flex gap-2 md:flex-row flex-col">
            <Button variant="outline" className="w-full md:w-auto">Cancel</Button>
            <Button className="w-full md:w-auto">Save Changes</Button>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Profile */}
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 text-sm font-medium">Profile</h2>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-sm font-medium">
                JD
              </div>

              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">
                  UX/UI Designer
                </p>
              </div>

              <div className="ml-auto flex gap-2 md:flex-row flex-col">
                <Button size="sm" variant="outline" className="w-full md:w-auto">
                  Upload Photo
                </Button>
                <Button size="sm" variant="ghost" className="w-full md:w-auto">
                  Delete
                </Button>
              </div>
            </div>
          </div>

          {/* Organization info */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium">Organization Information</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder="Business Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Fax" />
              <Input placeholder="Country" />
              <Input placeholder="City" />
              <Input placeholder="Postcode" />
              <Input placeholder="State" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Settings
