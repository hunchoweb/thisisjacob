import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// Define all public routes (which is everything in this case since the site should be accessible without login)
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sermons(.*)",
  "/counseling(.*)",
  "/charity(.*)",
  "/events(.*)",
  "/contact(.*)",
  "/payment-success",
  "/payment-failed",
  "/api/paystack/callback",
  // Add any other public routes here
])

export default clerkMiddleware(async (auth, request) => {
  // All routes are public, so we don't need to protect anything
  // This is just a placeholder for future protected routes if needed
  if (!isPublicRoute(request)) {
    // This block will only run for routes not matched above
    // For now, there are no protected routes
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}

