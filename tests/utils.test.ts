import { describe, expect, it } from 'vitest'
import { add, formatDate } from '@/utils'

describe('formatDate', () => {
  it('should return a formatted date', () => {
    const date = '2021-01-01'
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('January 1, 2021')
  })
})

describe('add', () => {
  it('add(1, 1) should return 2', () => {
    expect(add(1, 1)).toBe(2)
  })
})
