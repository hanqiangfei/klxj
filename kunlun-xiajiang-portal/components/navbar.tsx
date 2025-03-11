"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 border-b border-slate-700/50 shadow-md shadow-cyan-500/5" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            昆仑小疆
          </span>
          <span className="hidden md:inline-block text-sm text-slate-400">智能体</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            首页
          </Link>
          <Link href="#modules" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            功能模块
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            解决方案
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            关于我们
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:flex border-cyan-500/30 text-cyan-300 hover:bg-slate-800/50 hover:text-cyan-200 hover:border-cyan-500/50 transition-all duration-300"
          >
            登录
          </Button>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white font-medium shadow-lg shadow-cyan-500/20">
            立即体验
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-slate-300 hover:text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

