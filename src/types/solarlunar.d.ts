// src/types/solarlunar.d.ts
declare module 'solarlunar' {
  // 你可以把返回值细化成具体字段；先用 any 保证不报错
  interface SolarLunar {
    solar2lunar(y: number, m: number, d: number): any
    lunar2solar(y: number, m: number, d: number, isLeap?: boolean): any
  }
  const sl: SolarLunar
  export default sl
}