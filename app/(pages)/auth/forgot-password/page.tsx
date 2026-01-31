import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="absolute top-4 right-4 z-50">
                <ModeToggle />
            </div>
      <div className="w-full max-w-sm bg-card rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-sans mb-1 text-foreground">
          Forgot password
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Enter your email address and we’ll send you a reset link.
        </p>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-foreground">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 text-primary-foreground hover:opacity-90 transition"
          >
            Send reset link
          </button>
        </form>

        {/* Back to sign in */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Remembered your password?{" "}
          <Link
            href="/auth/signin"
            className="text-accent hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
