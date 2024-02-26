import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
// import { DM_Sans } from 'next/font/google';
import { Inter } from "next/font/google"

// const dmSans = DM_Sans({
//   weight: ['400', '500', '700'],
//   display: 'swap',
//   subsets: ['latin'],
// });

const inter = Inter({ subsets: ["latin"] })

export default function NotFound() {
  const sortedPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Not Found</title>
      </head>
      <body className="antialiased bg-main">
        <div className="max-w-[1440px] mx-auto">
          <div className="space-y-12">
            {sortedPosts.slice(0, 3).map((post) => (
              <p key={post._id}>{post.date}</p>
            ))}
          </div>
        </div>
      </body>
    </html>
  )
}
