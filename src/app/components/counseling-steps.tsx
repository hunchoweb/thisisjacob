export default function CounselingSteps() {
  return (
    <div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Steps</h2>
        <div className="mt-4 w-16 sm:w-24 border-b-2 border-gray-300"></div>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[21px] top-[40px] bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-8 sm:space-y-12">
          {/* Step 1 */}
          <div className="relative flex gap-4 sm:gap-6">
            <div className="flex-none">
              <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Step 1: Submit Your Request</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Fill out the counseling form with your details, concerns, and preferred session type. Be as specific as
                possible to help us understand how we can best support you.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex gap-6">
            <div className="flex-none">
              <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Step 2: Receive a Confirmation</h3>
              <p className="text-gray-600">
                Once your form is submitted, you&apos;ll receive a confirmation email with further instructions. We will
                assign a counselor based on your needs and availability.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex gap-6">
            <div className="flex-none">
              <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Step 3: Connect with Your Counselor</h3>
              <p className="text-gray-600">
                Your assigned counselor will reach out within 24-48 hours to schedule your session. Whether virtual or
                in-person, you&apos;ll receive guidance and support tailored to your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

