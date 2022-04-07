import { getToken } from 'next-auth/jwt'
import { nextResponse } from 'next/server'

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
}
