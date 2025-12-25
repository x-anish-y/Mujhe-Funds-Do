"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  if (status === "loading") return null;
  if (session) return null;
    return (
        <div className="text-white py-14 container mx-auto">
            <h1 className="text-center font-bold text-3xl">
                Login / Signup to Get Started
            </h1>

            <div className="py-16">
                <div className="container mx-auto flex justify-center">
                    <div className="relative p-4 w-full max-w-md">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="p-5">
                                <div className="text-center">
                                    <p className="mb-3 text-2xl font-semibold text-slate-900">
                                        Login to your account
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        You must be logged in to perform this action.
                                    </p>
                                </div>

                                <div className="mt-7 flex flex-col gap-2">
                                    <button
                                        onClick={() => signIn("github")}
                                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black focus:ring-2 focus:ring-black"
                                    >
                                        <img
                                            src="https://www.svgrepo.com/show/512317/github-142.svg"
                                            alt="GitHub"
                                            className="h-[18px] w-[18px]"
                                        />
                                        Continue with GitHub
                                    </button>

                                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black focus:ring-2 focus:ring-black">
                                        <img
                                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                                            alt="Google"
                                            className="h-[18px] w-[18px]"
                                        />
                                        Continue with Google
                                    </button>

                                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black focus:ring-2 focus:ring-black">
                                        <img
                                            src="https://www.svgrepo.com/show/448234/linkedin.svg"
                                            alt="LinkedIn"
                                            className="h-[18px] w-[18px]"
                                        />
                                        Continue with LinkedIn
                                    </button>
                                </div>

                                <div className="flex items-center gap-2 py-6 text-sm text-slate-600">
                                    <div className="h-px w-full bg-slate-200" />
                                    OR
                                    <div className="h-px w-full bg-slate-200" />
                                </div>

                                <form className="w-full text-black">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black"
                                    />

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black"
                                    />

                                    <p className="mt-2 text-sm text-gray-500">
                                        <a
                                            href="/forgot-password"
                                            className="text-blue-800 hover:text-blue-600"
                                        >
                                            Reset your password?
                                        </a>
                                    </p>

                                    <button
                                        type="submit"
                                        className="mt-3 w-full rounded-lg bg-black py-3 text-sm font-medium text-white focus:ring-2 focus:ring-black"
                                    >
                                        Continue
                                    </button>
                                </form>

                                <div className="mt-6 text-center text-sm text-slate-600">
                                    Don&apos;t have an account?{" "}
                                    <a href="/signup" className="font-medium text-blue-500">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
