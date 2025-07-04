// pages/post/[id].tsx or app/post/[id]/page.tsx
import Head from "next/head";
import { Post } from "@/types";
import { useRouter } from "next/router";
// import posts from "@/data/mockPosts"; // wherever your posts are stored

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const posts: Post[] = [
    {
      id: 1,
      author: "0x1234...5678",
      authorName: "sarah.eth",
      content: "Grateful for my freelance income reaching $5K this month!",
      timestamp: Date.now() - 3600000,
      totalTips: "12.5",
      tipCount: 8,
      farcasterHash: "0xabc123",
      isTrending: true,
      avatar: "🌟",
      farcasterUrl: "https://warpcast.com/sarah.eth/0xabc123",
      isPostedToFarcaster: true,
    },
    {
      id: 2,
      author: "0x8765...4321",
      authorName: "mike.builder",
      content: "Thank you universe for the unexpected bonus at work!",
      timestamp: Date.now() - 7200000,
      totalTips: "8.2",
      tipCount: 5,
      farcasterHash: "0xdef456",
      isTrending: false,
      avatar: "🚀",
      farcasterUrl: "https://warpcast.com/mike.builder/0xdef456",
      isPostedToFarcaster: true,
    },
    {
      id: 3,
      author: "0x2468...1357",
      authorName: "alex.crypto",
      content: "Grateful for finally paying off my student loans!",
      timestamp: Date.now() - 10800000,
      totalTips: "15.7",
      tipCount: 12,
      farcasterHash: "0x789ghi",
      isTrending: true,
      avatar: "🎯",
      farcasterUrl: "https://warpcast.com/alex.crypto/0x789ghi",
      isPostedToFarcaster: true,
    },
  ];

  const post = posts.find((p) => p.id === Number(id));
  if (!post) return <div>Post not found</div>;

  const metaEmbed = {
    version: "vNext",
    imageUrl:
      "https://grat-economy.vercel.app/_next/image?url=%2Fgratitude.png&w=48&q=75", // or better: a dynamic post screenshot/preview
    button: {
      title: "🚀 View Post",
      action: {
        type: "open_url",
        url: `https://grat-economy.vercel.app/post/${post.id}`,
      },
    },
  };

  return (
    <>
      <Head>
        <title>{post.content.slice(0, 20)}...</title>
        <meta name="fc:miniapp" content={JSON.stringify(metaEmbed)} />
        <meta name="fc:frame" content={JSON.stringify(metaEmbed)} />
        <meta property="og:title" content={post.content} />
        <meta property="og:description" content={`By ${post.authorName}`} />
      </Head>

      {/* Display Post */}
      <div className="max-w-xl mx-auto py-12">
        {/* You can reuse your PostCard here */}
        {/* Or manually render the post */}
        <h2 className="text-xl font-bold">{post.content}</h2>
        <p className="text-gray-500 mt-2">by {post.authorName}</p>
      </div>
    </>
  );
}
