"use client"

import { ModuleCard } from "@/components/module-card"
import { Users, HeadphonesIcon, Search, BrainCircuit, Code, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function ModulesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const modules = [
    {
      title: "大区智能助手",
      description: "为区域管理提供智能化支持与决策辅助",
      features: ["智能数据分析与可视化", "区域资源优化配置", "实时监控与预警系统", "智能决策支持"],
      icon: Users,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      title: "智能运维客服",
      description: "全天候智能客服，提升运维效率与用户体验",
      features: ["7×24小时智能响应", "多轮对话理解能力", "自动故障诊断与解决", "知识库自动更新"],
      icon: HeadphonesIcon,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      title: "油气水井智能检索",
      description: "高效精准的油气水井资源智能检索系统",
      features: ["多维度智能检索", "历史数据分析与预测", "异常情况自动识别", "资源优化配置建议"],
      icon: Search,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
    {
      title: "DeepSeek应用",
      description: "深度学习技术赋能的智能应用平台",
      features: ["深度语义理解", "复杂场景智能决策", "多模态数据处理", "持续学习与优化"],
      icon: BrainCircuit,
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
    },
    {
      title: "AI辅助编程",
      description: "提升开发效率的智能编程助手",
      features: ["代码智能补全与生成", "代码质量分析与优化", "智能调试与错误修复", "编程知识库与最佳实践"],
      icon: Code,
      color: "bg-gradient-to-br from-indigo-500 to-blue-600",
    },
    {
      title: "昆仑小智应用",
      description: "面向各行业的智能化解决方案",
      features: ["个性化智能助手", "行业知识库构建", "流程自动化与优化", "智能分析与报告生成"],
      icon: Sparkles,
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-12 h-full w-full absolute opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full"></div>
          ))}
        </div>

        <div className="grid grid-rows-12 h-full w-full absolute opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-white/5 w-full"></div>
          ))}
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <div className="inline-block mb-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-cyan-400 to-blue-600 opacity-30"></div>
              <div className="relative px-4 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50">
                <span className="text-xs font-medium text-cyan-300">核心能力</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">六大核心功能模块</h2>
          <p className="text-slate-300/80 max-w-[700px]">
            昆仑小疆AI大模型提供全方位的智能解决方案，满足不同行业的多样化需求
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              features={module.features}
              icon={module.icon}
              color={module.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-r from-cyan-400 to-blue-600 opacity-30"></div>
              <div className="relative px-6 py-3 rounded-lg bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
                <span className="text-sm font-medium text-cyan-300">探索更多 AI 解决方案</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

