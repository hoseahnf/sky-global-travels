"use client"

import { FormEvent, useState } from "react"
import { Star } from "lucide-react"

export function FeedbackSection() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (rating === 0) return
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section aria-labelledby="feedback-heading" className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="rounded-2xl border border-secondary/30 bg-primary-foreground/[0.06] p-6 sm:p-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Your voice matters</p>
            <h2 id="feedback-heading" className="mt-3 text-2xl font-bold sm:text-3xl">Rate Your Experience &amp; Feedback</h2>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/65">Help us make every journey with Sky Global Travels even better.</p>
          </div>
          {submitted ? (
            <div className="mt-7 rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-5 text-center text-sm font-semibold text-secondary" role="status">
              Thank you for your feedback!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <fieldset className="grid justify-items-center gap-2">
                <legend className="text-sm font-semibold">Your rating</legend>
                <div className="flex gap-2" aria-label="Choose a rating from one to five stars">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button key={value} type="button" aria-label={`${value} star${value === 1 ? "" : "s"}`} aria-pressed={rating === value} onClick={() => setRating(value)} className="rounded-md p-1 text-primary-foreground/35 transition hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                      <Star className={`h-7 w-7 ${rating >= value ? "fill-secondary text-secondary" : ""}`} />
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className="grid gap-2 text-sm font-semibold">
                Feedback
                <textarea required name="feedback" rows={4} placeholder="Tell us about your experience" className="resize-none rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-3 font-normal outline-none transition placeholder:text-primary-foreground/40 focus:border-secondary" />
              </label>
              <button type="submit" disabled={rating === 0} className="rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-50">Submit Feedback</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
