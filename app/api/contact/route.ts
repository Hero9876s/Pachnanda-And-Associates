import { NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  fullName: z.string().min(2),
  contactNumber: z.string().min(8).max(15),
  email: z.string().email(),
  country: z.string(),
  query: z.string().min(1).max(1000),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = ContactSchema.parse(body)

    console.log('Received contact form:', data)

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid input or bad request' },
      { status: 400 }
    )
  }
}

// Optional: test in browser
export async function GET() {
  return NextResponse.json({ status: 'API working' })
}
