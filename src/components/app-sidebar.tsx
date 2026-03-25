"use client"

import * as React from "react"
import {
  BookOpen,
  CalendarCheck,
  GraduationCap,
  LayoutDashboard,
  Search,
  Settings,
  ShieldCheck,
  SquareTerminal,
  User,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const tutor_navMain = [
  {
    title: "Tutor Dashboard",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      { title: "Overview", url: "/dashboard" },
      { title: "My Sessions", url: "#" },
      { title: "Earnings", url: "#" },
      { title: "Settings", url: "#" },
    ],
  },
]

const student_navMain = [
  {
    title: "Overview",
    url: "/",
    icon: LayoutDashboard,
    isActive: true,
    items: [
      { title: "Dashboard", url: "/dashboard" },
    ],
  },
  {
    title: "Learning",
    url: "#",
    icon: BookOpen,
    isActive: false,
    items: [
      { title: "My Bookings", url: "/dashboard/mybooking" },
      { title: "My Courses", url: "#" },
    ],
  },
  {
    title: "Discover",
    url: "#",
    icon: Search,
    isActive: false,
    items: [
      { title: "Browse Tutors", url: "#" },
      { title: "Browse Courses", url: "#" },
    ],
  },
  {
    title: "Account",
    url: "#",
    icon: User,
    isActive: false,
    items: [
      { title: "My Profile", url: "#" },
      { title: "Settings", url: "#" },
    ],
  },
]

const admin_navMain = [
  {
    title: "Admin Panel",
    url: "#",
    icon: ShieldCheck,
    isActive: true,
    items: [
      { title: "Overview", url: "/dashboard" },
      { title: "Manage Users", url: "#" },
      { title: "Manage Courses", url: "#" },
      { title: "Settings", url: "#" },
    ],
  },
]

interface appSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole: "ADMIN" | "STUDENT" | "TUTOR"
}

const roleLabel: Record<string, { label: string; icon: React.ElementType }> = {
  ADMIN: { label: "Admin Portal", icon: ShieldCheck },
  STUDENT: { label: "Student Portal", icon: GraduationCap },
  TUTOR: { label: "Tutor Portal", icon: CalendarCheck },
}

export function AppSidebar({ userRole, ...props }: appSidebarProps) {
  let userNav = null
  if (userRole === "ADMIN") {
    userNav = admin_navMain
  } else if (userRole === "STUDENT") {
    userNav = student_navMain
  } else {
    userNav = tutor_navMain
  }

  const { label, icon: RoleIcon } = roleLabel[userRole] ?? roleLabel["STUDENT"]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="cursor-default">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <RoleIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">SkillBridge</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={userNav} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
