# Next.js App Router - Production Patterns

```typescript
"use cache"
```

```typescript
revalidateTag()
```

```typescript
updateTag()
```

```typescript
refresh()
```

```typescript
params
```

```typescript
searchParams
```

```typescript
cookies()
```

```typescript
headers()
```

```typescript
useEffectEvent()
```

```typescript
cloudflare-nextjs
```

```typescript
clerk-auth
```

```typescript
better-auth
```

```typescript
cloudflare-d1
```

```typescript
drizzle-orm-d1
```

```typescript
tailwind-v4-shadcn
```

```typescript
zustand-state-management
```

```typescript
tanstack-query
```

```typescript
react-hook-form-zod
```

```bash
npm update next
# Verify: npm list next should show 16.1.1+
```

```bash
next dev --inspect
```

```typescript
// ❌ This no longer works in Next.js 16
export default function Page({ params, searchParams }: { params: { slug: string } searchParams: { query: string }}) {
  const slug = params.slug // ❌ Error: params is a Promise
  const query = searchParams.query // ❌ Error: searchParams is a Promise
  return <div>{slug}</div>
}
```

```typescript
// ✅ Correct: await params and searchParams
export default async function Page({ params, searchParams }: { params: Promise<{ slug: string }> searchParams: Promise<{ query: string }>}) {
  const { slug } = await params // ✅ Await the promise
  const { query } = await searchParams // ✅ Await the promise
  return <div>{slug}</div>
}
```

```typescript
// ❌ Before
import { cookies, headers } from 'next/headers'
export function MyComponent() {
  const cookieStore = cookies() // ❌ Sync access
  const headersList = headers() // ❌ Sync access
}

// ✅ After
import { cookies, headers } from 'next/headers'
export async function MyComponent() {
  const cookieStore = await cookies() // ✅ Async access
  const headersList = await headers() // ✅ Async access
}
```

```bash
npx @next/codemod@canary upgrade latest
```

```typescript
// For client components, use React.use() to unwrap promises
'use client';
import { use } from 'react';

export default function ClientComponent({ params}: { params: Promise<{ id: string }>}) {
  const { id } = use(params); // Unwrap Promise in client
  return <div>{id}</div>;
}
```

```typescript
// middleware.ts ❌ Deprecated in Next.js 16
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'value')
  return response
}

export const config = {
  matcher: '/api/:path*',
}
```

```typescript
// proxy.ts ✅ New in Next.js 16
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'value')
  return response
}

export const config = {
  matcher: '/api/:path*',
}
```

```typescript
// app/layout.tsx
export default function Layout({
  children,
  auth,
  dashboard,
}: {
  children: React.ReactNode
  auth: React.ReactNode
  dashboard: React.ReactNode
}) {
  return (
    <html>
      <body>
        {auth}
        {dashboard}
        {children}
      </body>
    </html>
  )
}
```

```typescript
// app/@auth/default.tsx
export default function AuthDefault() {
  return null // or <Skeleton /> or redirect
}

// app/@dashboard/default.tsx
export default function DashboardDefault() {
  return null
}
```

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    minimumCacheTTL: 60, // Revert to 60 seconds
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Add larger sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Restore old sizes
    formats: ['image/webp'], // Default
  },
}

export default config
```

```typescript
// app/components/expensive-component.tsx
'use cache'
export async function ExpensiveComponent() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  return (
    <div>
      <h1>{json.title}</h1>
      <p>{json.description}</p>
    </div>
  )
}
```

```typescript
// lib/data.ts
'use cache'
export async function getExpensiveData(id: string) {
  const response = await fetch(`https://api.example.com/items/${id}`)
  return response.json()
}

// Usage in component
import { getExpensiveData } from '@/lib/data'

export async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getExpensiveData(id) // Cached
  return <div>{product.name}</div>
}
```

```typescript
// app/dashboard/page.tsx

// Static header (cached)
'use cache'
async function StaticHeader() {
  return <header>My App</header>
}

// Dynamic user info (not cached)
async function DynamicUserInfo() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value
  const user = await fetch(`/api/users/${userId}`).then(r => r.json())
  return <div>Welcome, {user.name}</div>
}

// Page combines both
export default function Dashboard() {
  return (
    <div>
      <StaticHeader /> {/* Cached */}
      <DynamicUserInfo /> {/* Dynamic */}
    </div>
  )
}
```

```typescript
import { revalidateTag } from 'next/cache'

export async function updatePost(id: string) {
  await fetch(`/api/posts/${id}`, { method: 'PATCH' })
  revalidateTag('posts', 'max') // ✅ Second argument required in Next.js 16
}
```

```typescript
revalidateTag('posts', {
  stale: 3600, // Stale after 1 hour (seconds)
  revalidate: 86400, // Revalidate every 24 hours (seconds)
  expire: false, // Never expire (optional)
})
```

```typescript
'use server'
import { revalidateTag } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
  })

  revalidateTag('posts', 'max') // ✅ Revalidate with max staleness
}
```

```typescript
'use server'
import { updateTag } from 'next/cache'

export async function updateUserProfile(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string

  // Update database
  await db.users.update({ name, email })

  // Immediately refresh cache (read-your-writes)
  updateTag('user-profile') // User sees updated data immediately (no stale data)
}
```

```typescript
'use server'
import { refresh } from 'next/cache'

export async function refreshDashboard() {
  // Refresh uncached data (e.g., real-time metrics)
  refresh()
  // Cached data (e.g., static header) remains cached
}
```

```typescript
// app/api/posts/[id]/route.ts
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params // ✅ Await params in Next.js 16
  const headersList = await headers() // ✅ Await headers in Next.js 16

  const post = await db.posts.findUnique({ where: { id } })
  return NextResponse.json(post)
}
```

```typescript
// proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Check auth
  const token = request.cookies.get('token')
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
```

```typescript
'use client'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

export function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  const router = useRouter()

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    // Wrap navigation in startTransition for View Transitions
    startTransition(() => {
      router.push(href)
    })
  }

  return <a href={href} onClick={handleClick}>{children}</a>
}
```

```css
/* app/globals.css */
@view-transition {
  navigation: auto;
}

/* Animate elements with view-transition-name */
.page-title {
  view-transition-name: page-title;
}
```

```typescript
'use client'
import { useEffect, experimental_useEffectEvent as useEffectEvent } from 'react'

export function ChatRoom({ roomId }: { roomId: string }) {
  const onConnected = useEffectEvent(() => {
    console.log('Connected to room:', roomId)
  })

  useEffect(() => {
    const connection = connectToRoom(roomId)
    onConnected() // Non-reactive callback
    return () => connection.disconnect()
  }, [roomId]) // Only re-run when roomId changes

  return <div>Chat Room {roomId}</div>
}
```

```bash
npm install babel-plugin-react-compiler
```

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
}

export default config
```

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    turbopack: {
      fileSystemCaching: true, // Beta: Persist cache between runs
    },
  },
}

export default config
```

### When to Use This Skill
- Debugging or migrating an existing Next.js application to version 16, specifically addressing breaking changes.
- Implementing advanced production patterns like caching strategies and optimized route handlers within the App Router.
- Understanding the implications and usage of React 19 features when building Next.js 16 applications.
- Troubleshooting common Next.js 16 errors and optimizing build performance with Turbopack.

### Pro Tips
- 💡Always review the 'Next.js 16 Breaking Changes' section thoroughly before any major upgrade to anticipate potential migration issues.
- 💡Leverage the new caching APIs and `cache` components to significantly improve your application's performance in production environments.
- 💡When encountering performance bottlenecks, experiment with Turbopack (stable in Next.js 16) for faster development and build times.
