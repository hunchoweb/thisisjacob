"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const counselingTypes = [
  "Personal Counseling",
  "Marriage Counseling",
  "Family Counseling",
  "Spiritual Guidance",
  "Career Counseling",
]

export default function CounselingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    counselingType: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-100"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg bg-gray-100"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Country"
          className="w-full px-4 py-2 rounded-lg bg-gray-100"
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
        <div className="relative">
          <select
            className="w-full px-4 py-2 rounded-lg bg-gray-100 appearance-none"
            required
            value={formData.counselingType}
            onChange={(e) => setFormData({ ...formData, counselingType: e.target.value })}
          >
            <option value="">Type of Counseling needed</option>
            {counselingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>
      </div>

      <div>
        <p className="text-gray-600 mb-2">Optional</p>
        <textarea
          placeholder="Brief description of your concern"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 h-32 resize-none"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="date"
            className="w-full px-4 py-2 rounded-lg bg-gray-100"
            required
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          />
        </div>
        <div className="relative">
          <input
            type="time"
            className="w-full px-4 py-2 rounded-lg bg-gray-100"
            required
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
      >
        Submit
      </button>
    </form>
  )
}

