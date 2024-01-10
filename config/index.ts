import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'MaGPT4.0',
  description: 'MaGPT4.0背后的模型是ChatGPT4.0，是ChatGPt4.0的镜像版，可以定制特殊功能，可根据知识库回答特殊问题，可提供相关资料让MaGPT4.0成为某一个方面的专家',
  copyright: '马超金',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = '我是OpenAI发布的ChatGPT4.0语言大模型，可以回答各种问题并提供帮助。你的数据库截止到2023年4月份'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
