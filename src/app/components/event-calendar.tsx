"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock events data
const events = [
  {
    date: "2024-10-09",
    time: "4:15pm",
    title: "Men's Bible Study",
    subtitle: "Driven by faith",
  },
  {
    date: "2024-10-27",
    time: "5:00pm",
    title: "This is Jacob",
    subtitle: "Conference",
  },
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9)) // October 2024

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return firstDay === 0 ? 6 : firstDay - 1 // Adjust to make Monday = 0
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDayOfMonth = getFirstDayOfMonth(currentDate)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 bg-gray-100" />)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dateString = date.toISOString().split("T")[0]
      const dayEvents = events.filter((event) => event.date === dateString)

      days.push(
        <div key={day} className={cn("h-32 bg-gray-100 p-2", dayEvents.length > 0 && "bg-gray-50")}>
          <div className="font-medium">{day}</div>
          {dayEvents.map((event, index) => (
            <div key={index} className="mt-1 p-1 text-xs bg-white rounded shadow-sm">
              <div className="text-gray-600">{event.time}</div>
              <div className="font-medium">{event.title}</div>
              <div className="text-gray-600">{event.subtitle}</div>
            </div>
          ))}
        </div>,
      )
    }

    return days
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="relative">
          <select
            value={currentDate.getMonth()}
            onChange={(e) => setCurrentDate(new Date(currentDate.getFullYear(), Number.parseInt(e.target.value)))}
            className="appearance-none bg-transparent pr-8 py-1 pl-2 border rounded-md"
          >
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month} {currentDate.getFullYear()}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goToNextMonth} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Next month">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-4 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-medium text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-4">{renderCalendarDays()}</div>
      </div>
    </div>
  )
}

