"use client"
import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Facebook, Google, Microsoft } from "../social-icons/icons"
import { useRouter } from "next/navigation"

const SignInForm = () => {
  const router=useRouter()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // later: validate / authenticate here
    router.replace("/dashboard")
  }
  return (
    <Card className="w-full max-w-100 rounded-2xl shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>Welcome back. Please enter your details.</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-4" onSubmit={onSubmit}>
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="font-normal">
                Remember me
              </Label>
            </div>

            <Link
              href="/auth/forgot-password"
              className="text-accent hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Primary button */}
          <Button type="submit" className="w-full">
            Sign in
          </Button>

          {/* Divider */}
          <div className="relative my-4 flex items-center">
            <span className="w-full border-t border-border" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-card px-2 text-xs text-muted-foreground">
              or continue with
            </span>
          </div>

          {/* Social buttons */}
          <div className="hidden grid-cols-3 gap-3">
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <Google className="h-4 w-4" />
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <Microsoft className="h-4 w-4" />
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>

          {/* Sign up link */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            No account?{" "}
            <Link href="/auth/signup" className="text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignInForm
