"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ModulesSection } from "@/components/modules-section"
import { Footer } from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  // Add cursor effect
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className =
      "fixed w-6 h-6 rounded-full pointer-events-none z-50 opacity-70 transition-transform duration-100 ease-out"
    cursor.style.background = "radial-gradient(circle, rgba(56,182,255,0.6) 0%, rgba(56,182,255,0) 70%)"
    cursor.style.transform = "translate(-50%, -50%)"
    document.body.appendChild(cursor)

    const cursorInner = document.createElement("div")
    cursorInner.className =
      "fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out"
    cursorInner.style.transform = "translate(-50%, -50%)"
    document.body.appendChild(cursorInner)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
      cursorInner.style.left = `${e.clientX}px`
      cursorInner.style.top = `${e.clientY}px`
    }

    const growCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
      cursorInner.style.transform = "translate(-50%, -50%) scale(0.5)"
    }

    const shrinkCursor = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
      cursorInner.style.transform = "translate(-50%, -50%) scale(1)"
    }

    document.addEventListener("mousemove", moveCursor)

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", growCursor)
      link.addEventListener("mouseleave", shrinkCursor)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", growCursor)
        link.removeEventListener("mouseleave", shrinkCursor)
      })
      document.body.removeChild(cursor)
      document.body.removeChild(cursorInner)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ModulesSection />
      </main>
      <Footer />
    </div>
  )
}

