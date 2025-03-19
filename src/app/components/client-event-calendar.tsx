"use client"

import dynamic from "next/dynamic"

const EventCalendar = dynamic(() => import("./event-calendar"), {
  ssr: false,
  loading: () => <div className="p-4 text-center">Loading calendar...</div>,
})

export default function ClientEventCalendar() {
  return <EventCalendar />
}

