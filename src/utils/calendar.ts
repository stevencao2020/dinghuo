// src/utils/calendar.ts
import dayjs from 'dayjs'
import solarlunar from 'solarlunar'

export type DayInfo = {
  date: string        // YYYY-MM-DD
  lunar: string       // 农历字符串，如 七月初五
  ganzhi: { year: string; month: string; day: string }
  animal: string
  term?: string       // 节气（若无则为 '—'）
}

export function getDayInfo(d: string): DayInfo {
  const dt = dayjs(d)
  const y = dt.year()
  const m = dt.month() + 1     // 注意：solarlunar 需要 1-12
  const dd = dt.date()

  const lunar = solarlunar.solar2lunar(y, m, dd)

  // 兼容不同版本字段名
  const lunarMonthName =
    lunar.lunarMonthName || lunar.IMonthCn || lunar.monthCn || lunar.monthStr || ''
  const lunarDayName =
    lunar.lunarDayName || lunar.IDayCn || lunar.dayCn || lunar.dayStr || ''
  const gzYear  = lunar.gzYear  || lunar.GanZhiYear  || ''
  const gzMonth = lunar.gzMonth || lunar.GanZhiMonth || ''
  const gzDay   = lunar.gzDay   || lunar.GanZhiDay   || ''
  const animal  = lunar.animal  || lunar.animalYear  || ''
  const term    = lunar.term || lunar.solarTerm || '—'   // 非节气日为空，这里用 '—'

  return {
    date: dt.format('YYYY-MM-DD'),
    lunar: `${lunarMonthName}${lunarDayName}`,
    ganzhi: { year: gzYear, month: gzMonth, day: gzDay },
    animal,
    term,
  }
}