import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const POST = async () => {
  cookies().delete('session_access')
  cookies().delete('session_refresh')

  return NextResponse.json({ message: 'sign-out successfully' })
}
