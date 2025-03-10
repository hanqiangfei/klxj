import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                昆仑小疆
              </span>
            </div>
            <p className="text-sm text-slate-400">赋能行业智能化转型，提供全方位AI解决方案</p>

            {/* Tech decoration */}
            <div className="flex space-x-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-white">产品</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  大区智能助手
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  智能运维客服
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  油气水井智能检索
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-white">解决方案</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  DeepSeek应用
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  AI辅助编程
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  昆仑小智应用
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-white">联系我们</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">邮箱: contact@kunlunxiajing.ai</li>
              <li className="text-slate-400">电话: 400-888-8888</li>
              <li className="text-slate-400">地址: 北京市海淀区科技园区88号</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">© 2025 昆仑小疆 AI大模型. 保留所有权利.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">
              隐私政策
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">
              使用条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

