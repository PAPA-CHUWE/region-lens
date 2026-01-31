import SignInForm from "@/components/auth-ui/sign-in-form";
import { ModeToggle } from "@/components/theme/mode-toggle";

const SignIn = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">
            <div className="absolute top-4 right-4 z-50">
                <ModeToggle />
            </div>

            {/* LEFT / BRAND PANEL */}
            <div className="relative hidden md:flex items-center justify-center overflow-hidden  text-primary-foreground">

                {/* Decorative shapes */}
                <div className="absolute -top-64 -left-24 w-200 h-200 rounded-full bg-primary" />
                <div className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-secondary shadow-cyan-100 shadow-xl" />
                <div className="absolute bottom-56 right-20 w-40 h-40 rounded-full bg-accent " />

                {/* Content */}
                <div className="relative z-10 max-w-sm px-10 -translate-y-8 md:-translate-y-16">
                    <h1 className="text-4xl font-sans mb-4 tracking-wide">
                        Welcome to RegionLens
                    </h1>
                    <p className="text-sm leading-relaxed text-primary-foreground/80 text-justify">
                        Explore regional insights and development trends using open data.
                        Compare countries, track change, and uncover patterns.
                    </p>
                </div>

            </div>

            {/* RIGHT / FORM PANEL */}
            <div className="flex items-center justify-center px-6">
                <SignInForm />
            </div>
        </div>
    );
};

export default SignIn;
