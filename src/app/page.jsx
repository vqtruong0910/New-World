import Avatar from '@components/Avatar'
import Link from 'next/link'
export default async function Home({ searchParams }) {
  const users = await fetch(`http://localhost:3000/api?name=${searchParams?.name}`)
  const data = await users.json()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Avatar data={data} />
      <Link href="/login">{JSON.stringify(searchParams)}</Link>
    </main>
  )
}
