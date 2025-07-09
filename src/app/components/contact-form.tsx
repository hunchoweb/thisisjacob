"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const countries = ["United States", "Canada", "United Kingdom", "Nigeria", "South Africa", "Other"]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-100"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* Country Select */}
      <div className="relative">
        <select
          className="w-full px-4 py-3 rounded-lg bg-gray-100 appearance-none"
          required
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        >
          <option value="">Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-100"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      {/* Phone Input */}
      <div>
        <input
          type="tel"
          placeholder="Phone"
          className="w-full px-4 py-3 rounded-lg bg-gray-100"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          placeholder="Question or Comment"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 h-32 resize-none"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          className="mt-1"
          required
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to be contacted by This is Jacob&apos;s Global Men&apos;s Fellowship. By providing my information, I agree to receive
          messages from the charity.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-medium transition-colors"
      >
        Submit
      </button>
    </form>
  )
}

