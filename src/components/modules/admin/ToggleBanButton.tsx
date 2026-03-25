"use client"

import { toggleUserStatus } from "@/service/admin/admin.service"
import { useRouter } from "next/navigation"
import { useTransition } from "react"


export default function ToggleBanButton({ id, status }: any) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      await toggleUserStatus(id, status)
      router.refresh()
    })
  }

  return (
    <button onClick={handleClick} disabled={isPending}>
      {isPending ? "Loading..." : status === "BAN" ? "Unban" : "Ban"}
    </button>
  )
}