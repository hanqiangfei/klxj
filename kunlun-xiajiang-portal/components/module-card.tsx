"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ModuleCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  color: string
  delay?: number
}

export function ModuleCard({ title, description, features, icon: Icon, color, delay = 0 }: ModuleCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="relative h-full overflow-hidden bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-slate-600/50">
        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
        ></div>

        {/* Tech border effect */}
        <div className="absolute inset-0 border border-slate-700/50 rounded-lg">
          <div
            className={`absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 ${isHovered ? "w-full" : ""}`}
          ></div>
          <div
            className={`absolute bottom-0 right-0 h-px w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 ${isHovered ? "w-full" : ""}`}
          ></div>
          <div
            className={`absolute left-0 top-0 w-px h-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent transition-all duration-700 ${isHovered ? "h-full" : ""}`}
          ></div>
          <div
            className={`absolute right-0 bottom-0 w-px h-0 bg-gradient-to-b from-transparent via-blue-400 to-transparent transition-all duration-700 ${isHovered ? "h-full" : ""}`}
          ></div>
        </div>

        <CardHeader>
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color} shadow-lg relative group`}
          >
            <div className="absolute inset-0 rounded-lg opacity-50 blur-sm bg-inherit"></div>
            <Icon className="h-6 w-6 text-white relative z-10" />

            {/* Animated dots */}
            <div
              className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white/80 opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : ""}`}
            ></div>
            <div
              className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-white/80 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
            ></div>
          </div>
          <CardTitle className="text-xl text-white">{title}</CardTitle>
          <CardDescription className="text-slate-300/80">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
                className="flex items-start gap-2"
              >
                <div className={`rounded-full p-1 mt-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20`}>
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </div>
                <span className="text-sm text-slate-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full border-cyan-500/30 text-cyan-300 hover:bg-slate-800/50 hover:text-cyan-200 hover:border-cyan-500/50 transition-all duration-300"
          >
            了解详情
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

