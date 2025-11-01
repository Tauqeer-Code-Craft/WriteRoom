"use client";

import { ReactNode } from "react";
import { FullscreenLoader } from "./fullscreen-loader";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs";
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


