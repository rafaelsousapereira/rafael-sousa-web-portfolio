import { describe, expect, it } from 'vitest'
import { createContactSchema } from '@/application/contact/contact-schema'

const validation = {
  nameMin: 'name min',
  nameMax: 'name max',
  email: 'email invalid',
  subjectMin: 'subject min',
  messageMin: 'message min',
}

const schema = createContactSchema(validation)

const validPayload = {
  name: 'Rafael Sousa',
  email: 'rafael@example.com',
  subject: 'Opportunity',
  message: 'Hello there, I would like to talk.',
}

describe('createContactSchema', () => {
  it('accepts a valid payload', () => {
    expect(schema.parse(validPayload)).toEqual(validPayload)
  })

  it('requires a name with at least 5 characters', () => {
    const result = schema.safeParse({ ...validPayload, name: 'Ana' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name?.[0]).toBe('name min')
    }
  })

  it('rejects an invalid email', () => {
    const result = schema.safeParse({ ...validPayload, email: 'not-an-email' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email?.[0]).toBe('email invalid')
    }
  })

  it('requires a subject', () => {
    const result = schema.safeParse({ ...validPayload, subject: 'Hi' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.subject?.[0]).toBe('subject min')
    }
  })

  it('requires a message', () => {
    const result = schema.safeParse({ ...validPayload, message: 'Hey' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.message?.[0]).toBe('message min')
    }
  })

  it('enforces the name max length', () => {
    const result = schema.safeParse({
      ...validPayload,
      name: 'N'.repeat(51),
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name?.[0]).toBe('name max')
    }
  })
})
