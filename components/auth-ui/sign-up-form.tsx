"use client"
import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Card className="w-full max-w-108 rounded-2xl shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>Get started by creating your account.</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" type="text" placeholder="John Doe" autoComplete="name" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </div>

          {/* Password with show/hide */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" className="mt-1" />
            <Label
              htmlFor="terms"
              className="text-sm leading-5 text-muted-foreground font-normal"
            >
              I agree to the{" "}
              <a href="#" className="text-accent hover:underline text-sm">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-accent hover:underline">
                Privacy Policy
              </a>
            </Label>
          </div>

          {/* Primary button */}
          <Button type="submit" className="w-full">
            Create account
          </Button>

          {/* Secondary */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/auth/signin" className="text-accent hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignUpForm
