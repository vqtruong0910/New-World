import { NextResponse } from 'next/server'
export async function GET(req, context) {
  const users = await fetch('https://645a961965bd868e931f50cf.mockapi.io/users')
  const data = await users.json()
  console.log(req.nextUrl.searchParams)
  return NextResponse.json(data)
}
