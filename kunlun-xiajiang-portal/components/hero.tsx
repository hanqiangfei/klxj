"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${100 + Math.random() * 155}, ${180 + Math.random() * 75}, ${220 + Math.random() * 35}, ${0.3 + Math.random() * 0.4})`,
        })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      connectParticles()
      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animateParticles()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                昆仑小疆
              </span>{" "}
              智创未来
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 max-w-[700px] mx-auto">赋能油气行业</p>
            <p className="text-base md:text-lg text-blue-100/70 max-w-[800px] mx-auto mt-4">
              基于先进的DeepSeek大模型和自然语言处理技术，昆仑小疆为油气行业打造智能体解决方案，实现效率提升与成本优化的完美平衡。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 text-white font-medium shadow-lg shadow-cyan-500/20"
            >
              开始使用 <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400/30 text-cyan-300 hover:bg-slate-800/50 hover:text-cyan-200 hover:border-cyan-400/50 font-medium"
            >
              了解更多
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-5xl mt-8"
          >
            <div className="absolute -inset-1 rounded-2xl blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/50">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="昆仑小疆AI大模型展示"
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                    <div className="p-6 text-white text-left">
                      <p className="text-lg font-medium text-cyan-300">智能大模型，无限可能</p>
                      <p className="text-sm text-blue-100/70">基于先进技术，为各行业提供智能解决方案</p>
                    </div>
                  </div>

                  {/* Tech elements overlay */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-4 right-4 w-24 h-24 border border-cyan-500/30 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute bottom-16 left-8 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse opacity-30"></div>
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/10 rounded-full"></div>
      <div className="absolute top-40 right-10 w-48 h-48 border border-blue-500/10 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-purple-500/10 rounded-full"></div>
    </section>
  )
}

