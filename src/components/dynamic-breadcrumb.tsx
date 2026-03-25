"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Map URL segments to human-readable labels
const segmentLabels: Record<string, string> = {
  dashboard: "Dashboard",
  mybooking: "My Bookings",
  courses: "Courses",
  profile: "Profile",
  settings: "Settings",
  admin: "Admin",
  student: "Student",
  tutor: "Tutor",
}

function formatSegment(segment: string): string {
  return (
    segmentLabels[segment.toLowerCase()] ??
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  )
}

export function DynamicBreadcrumb() {
  const pathname = usePathname()

  // Split path into segments, filtering out empty strings
  const segments = pathname.split("/").filter(Boolean)

  if (segments.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          const href = "/" + segments.slice(0, index + 1).join("/")
          const label = formatSegment(segment)

          return (
            <span key={href} className="flex items-center gap-1.5">
              {index > 0 && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
              <BreadcrumbItem className={index < segments.length - 1 ? "hidden md:block" : undefined}>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
