import { liSend } from '@/utils/request'

// 测试请求
export const login = (obj) => { return liSend("post", "login", obj) };