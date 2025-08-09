// src/store/index.ts
import { createPinia, defineStore } from 'pinia'

export const pinia = createPinia()

// 表单用到的类型
export type Profile = {
  name: string
  gender: 'male' | 'female' | ''
  birthDate: string   // YYYY-MM-DD
  birthTime: string   // HH:mm
  birthplace: string
}

const LS_KEY = 'dinghuo_profile'

function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) as Profile : { name:'', gender:'', birthDate:'', birthTime:'', birthplace:'' }
  } catch {
    return { name:'', gender:'', birthDate:'', birthTime:'', birthplace:'' }
  }
}

export const useAppStore = defineStore('app', {
  state: () => ({
    title: '丁火万年历',
    profile: loadProfile() as Profile,
  }),
  actions: {
    saveProfile(p: Profile) {
      this.profile = p
      localStorage.setItem(LS_KEY, JSON.stringify(p))
    },
  },
})