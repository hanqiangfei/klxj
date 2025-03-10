<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->
<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <!-- 导航栏 -->
        <nav class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <img src="@/assets/昆仑小疆.png" alt="昆仑小疆" class="h-10 w-10 object-contain">
                    <span
                        class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">昆仑小疆</span>
                </div>
                <div class="flex items-center space-x-10">
                    <a v-for="item in navItems" :key="item"
                        class="text-gray-600 hover:text-blue-600 cursor-pointer font-medium transition-colors">{{ item
                        }}</a>
                    <a href="http://xj.asstar.net/" target="_blank"
                        class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-2.5 !rounded-button cursor-pointer whitespace-nowrap hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm hover:shadow-md">立即体验</a>
                </div>
            </div>
        </nav>
        <!-- Hero区域 -->
        <div class="relative h-[800px] bg-gradient-to-r from-blue-50 to-white overflow-hidden">
            <div
                class="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/46ed904c0a8131434e7ba9704d1b049a.jpg')] bg-cover bg-center opacity-90">
            </div>
            <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
            <div class="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                <div class="w-1/2">
                    <div
                        class="inline-block px-6 py-2 bg-blue-50 rounded-full border border-blue-100 text-blue-600 mb-8 font-medium">
                        DeepSeek大模型驱动的智能体解决方案
                    </div>
                    <h1 class="text-7xl font-bold text-gray-900 mb-8 leading-tight">                       
                        <span class="block">AI智能体</span>           
                        <span class="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">昆仑小疆 智创未来</span>
                        <span class="block">赋能油气行业</span>
                    </h1>
                    <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                        基于先进的DeepSeek大模型和自然语言处理技术，昆仑小疆为油气行业打造智能体解决方案，实现效率提升与成本优化的完美平衡。</p>
                    <div class="flex space-x-6">
                        <a href="http://xj.asstar.net/" target="_blank"
                            class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 !rounded-button cursor-pointer whitespace-nowrap transition-all duration-300 shadow-lg hover:shadow-blue-200">
                            <span class="flex items-center text-lg font-medium">
                                开始使用
                                <el-icon class="ml-2 text-xl">
                                    <ArrowRight />
                                </el-icon>
                            </span>
                        </a>
                        <a href="https://nipj5983sr.fklzl.cnpc.com.cn/wiki/UkWWwkF2JiRssLknrxMgd4APt1c" target="_blank"
                            class="border-2 border-blue-200 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 !rounded-button cursor-pointer whitespace-nowrap transition-all duration-300 text-lg font-medium">了解更多</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 功能模块 -->
        <div class="py-24 relative">
            <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900"></div>
            <div class="max-w-7xl mx-auto px-4 relative">
                <div class="text-center mb-20">
                    <div class="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 mb-4">核心能力</div>
                    <h2
                        class="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mb-6">
                        六大核心功能模块</h2>
                    <p class="text-blue-200 max-w-2xl mx-auto">融合最新 AI 大模型技术，打造全方位智能化解决方案</p>
                </div>
                <div class="grid grid-cols-3 gap-8">
                    <div v-for="(feature, index) in features" :key="index"
                        class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-blue-500/20">
                        <img :src="feature.image" :alt="feature.title"
                            class="w-full h-48 object-cover object-top rounded-lg mb-6">
                        <h3 class="text-xl font-bold mb-4 text-blue-100">{{ feature.title }}</h3>
                        <p class="text-blue-200 mb-6">{{ feature.description }}</p>
                        <ul class="space-y-3 mb-6">
                            <li v-for="(point, pointIndex) in feature.points" :key="pointIndex"
                                class="flex items-start">
                                <el-icon class="text-blue-400 mt-1">
                                    <Check />
                                </el-icon>
                                <span class="ml-2 text-blue-200">{{ point }}</span>
                            </li>
                        </ul>
                        <button
                            class="text-blue-400 hover:text-blue-300 font-medium cursor-pointer whitespace-nowrap group-hover:translate-x-1 transition-transform duration-300 flex items-center">
                            了解更多 <el-icon class="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight />
                            </el-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 页脚 -->
        <footer class="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-16 relative overflow-hidden">
            <div
                class="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/acdaf3de968fe7370ae96095bf466136.jpg')] opacity-10">
            </div>
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 class="font-bold mb-4">关于我们</h4>
                        <p class="text-gray-400">昆仑小疆致力于为油气行业提供智能化解决方案，以 AI 技术推动行业数字化转型。</p>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">联系方式</h4>
                        <p class="text-gray-400">电话：400-888-8888</p>
                        <p class="text-gray-400">邮箱：contact@kunlun.ai</p>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">快速链接</h4>
                        <div class="space-y-2">
                            <a v-for="item in navItems" :key="item"
                                class="block text-gray-400 hover:text-white cursor-pointer">{{ item }}</a>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold mb-4">关注我们</h4>
                        <div class="flex space-x-4">
                            <el-icon class="text-2xl cursor-pointer">
                                <Platform />
                            </el-icon>
                            <el-icon class="text-2xl cursor-pointer">
                                <Share />
                            </el-icon>
                            <el-icon class="text-2xl cursor-pointer">
                                <Message />
                            </el-icon>
                        </div>
                    </div>
                </div>
                <div class="pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© 2025 昆仑小疆. 保留所有权利</p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Check, ArrowRight, Platform, Share, Message } from '@element-plus/icons-vue';
const logoUrl = 'https://public.readdy.ai/ai/img_res/1d00bf587d46b000873ec69186f9cf5f.jpg';
const heroBackgroundUrl = 'https://public.readdy.ai/ai/img_res/1573629d057f7943f859dc50b3b7937f.jpg';
const navItems = ['首页', '产品', '解决方案', '关于我们', '联系我们'];
const features = [
    {
        title: '大区智能助手',
        description: '智能处理大区业务流程，提供 24/7 全天候服务支持',
        image: 'https://public.readdy.ai/ai/img_res/f0b3b7ae26f03a38c775a65b56206f61.jpg',
        points: ['自动化工作流程管理', '智能数据分析与决策支持', '多维度业务监控']
    },
    {
        title: '智能运维客服',
        description: '基于深度学习的智能客服系统，快速响应用户需求',
        image: 'https://public.readdy.ai/ai/img_res/e7bc974815e168e42e7f0a19f5687213.jpg',
        points: ['智能问答系统', '自动工单分类与处理', '实时数据分析']
    },
    {
        title: '油气水井智能检索',
        description: '高效精准的油气水井信息检索系统',
        image: 'https://public.readdy.ai/ai/img_res/08b7ffae837bb804c4b1e7712789db68.jpg',
        points: ['多维度数据检索', '实时监控分析', '智能预警系统']
    },
    {
        title: 'DeepSeek 应用',
        description: '深度学习技术在油气行业的创新应用',
        image: 'https://public.readdy.ai/ai/img_res/ee09742b66bb0f6a11c3fc97d2395f3f.jpg',
        points: ['深度学习模型训练', '智能预测分析', '自动化决策支持']
    },
    {
        title: 'AI 辅助编程',
        description: '提升开发效率的智能编程助手',
        image: 'https://public.readdy.ai/ai/img_res/1c4bc58ad7d64ebf33707709db2a2b6d.jpg',
        points: ['代码智能补全', '自动化测试', '代码质量分析']
    },
    {
        title: '昆仑小智应用',
        description: '综合 AI 能力的智能应用平台',
        image: 'https://public.readdy.ai/ai/img_res/eb1e8cbc709c454d06db71ce4a4c297e.jpg',
        points: ['多场景 AI 能力', '一站式解决方案', '持续优化升级']
    }
];
</script>
<style scoped>
.feature-card {
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-8px);
}
</style>
