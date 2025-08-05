// "use client";

// import Link from "next/link";

// import {
//   ArrowRight,
//   Shield,
//   Zap,
//   Users,
//   Code,
//   BarChart2,
//   Check,
// } from "lucide-react";

// export const LandingPage = () => {
//   // useEffect(() => {
//   sdk.actions.ready();
//   // }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//             <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
//               <div className="sm:text-center lg:text-left">
//                 <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
//                   <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     Build Trust Onchain
//                   </span>
//                   <span className="block text-white mt-2">With CastCred</span>
//                 </h1>
//                 <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                   The decentralized reputation protocol for Farcaster. Endorse
//                   builders, schedule casts, and grow your onchain credibility.
//                 </p>
//                 <div className="mt-8 sm:mt-12">
//                   <div className="rounded-md shadow">
//                     <Link
//                       href="/dashboard"
//                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
//                     >
//                       Launch App <ArrowRight className="ml-2 w-5 h-5" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//         <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//           <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl transform translate-x-1/4 translate-y-1/4" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" />
//                 <div className="absolute inset-4 flex items-center justify-center">
//                   <div className="w-full h-full bg-gray-800/50 backdrop-blur-sm rounded-full border-2 border-purple-500/30 flex items-center justify-center">
//                     <Shield className="w-32 h-32 text-purple-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-12 bg-gray-800/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">
//               Features
//             </h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
//               A better way to build reputation
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
//               CastCred brings verifiable credentials to Farcaster in a seamless,
//               decentralized way.
//             </p>
//           </div>

//           <div className="mt-10">
//             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
//               {[
//                 {
//                   name: "Onchain Endorsements",
//                   description:
//                     "Give and receive verifiable endorsements that live on the blockchain.",
//                   icon: Zap,
//                 },
//                 {
//                   name: "Smart Scheduling",
//                   description:
//                     "Optimize your casts across multiple channels with intelligent scheduling.",
//                   icon: BarChart2,
//                 },
//                 {
//                   name: "Developer Tools",
//                   description:
//                     "Integrate reputation data into your apps with our developer API.",
//                   icon: Code,
//                 },
//                 {
//                   name: "Community Building",
//                   description:
//                     "Recognize valuable contributors and grow your community.",
//                   icon: Users,
//                 },
//                 {
//                   name: "Trust Scores",
//                   description:
//                     "Quantify reputation with our proprietary trust algorithm.",
//                   icon: Shield,
//                 },
//                 {
//                   name: "Decentralized",
//                   description:
//                     "Built on open protocols with no central authority.",
//                   icon: Check,
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors"
//                 >
//                   <div className="flex items-center mb-4">
//                     <div className="flex-shrink-0 bg-purple-500/10 p-2 rounded-lg">
//                       <feature.icon className="h-6 w-6 text-purple-400" />
//                     </div>
//                     <h3 className="ml-3 text-lg font-medium text-white">
//                       {feature.name}
//                     </h3>
//                   </div>
//                   <p className="mt-2 text-base text-gray-300">
//                     {feature.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//           <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
//             <span className="block">Ready to dive in?</span>
//             <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Start building your onchain reputation today.
//             </span>
//           </h2>
//           <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
//             <div className="inline-flex rounded-md shadow">
//               <Link
//                 href="/dashboard"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
//               >
//                 Get Started <ArrowRight className="ml-2 w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import Link from "next/link";
import { sdk } from "@farcaster/frame-sdk";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Code,
  BarChart2,
  Star,
  Globe,
  Sparkles,
  ChevronRight,
  Play,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

export function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  sdk.actions.ready();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CastCred
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:text-white bg-transparent"
              >
                Sign In
              </Button>

              <Link
                href="/dashboard"
                className="inline-block text-center px-4 py-2 rounded-md text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-purple-500/10 text-purple-300 border-purple-500/20"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Now in Beta
            </Badge>

            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="block">Build Trust</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Onchain
              </span>
            </h1>

            <p
              className={`mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              The decentralized reputation protocol for Farcaster. Give
              endorsements, schedule cross-channel casts, and grow your onchain
              credibility with verifiable trust scores.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-medium text-white px-4 py-2 transition-colors"
              >
                Launch App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white text-lg px-8 py-4 bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { label: "Endorsements Given", value: "12.5K+" },
                { label: "Active Builders", value: "2.8K+" },
                { label: "Trust Score Generated", value: "45K+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20"
            >
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything you need to build
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                onchain reputation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              CastCred provides the tools and infrastructure to create, verify,
              and leverage decentralized reputation across the Farcaster
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Onchain Endorsements",
                description:
                  "Give and receive verifiable endorsements that live permanently on the blockchain with cryptographic proof.",
                icon: Zap,
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                name: "Smart Cast Scheduling",
                description:
                  "Optimize your content across multiple Farcaster channels with AI-powered scheduling and analytics.",
                icon: BarChart2,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Developer API",
                description:
                  "Integrate reputation data into your applications with our comprehensive REST and GraphQL APIs.",
                icon: Code,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                name: "Community Building",
                description:
                  "Recognize valuable contributors, reward engagement, and grow thriving communities around your projects.",
                icon: Users,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Trust Algorithms",
                description:
                  "Quantify reputation with our proprietary trust scoring system based on onchain activity and endorsements.",
                icon: Shield,
                gradient: "from-red-500 to-pink-500",
              },
              {
                name: "Decentralized Protocol",
                description:
                  "Built on open standards with no central authority. Your reputation data belongs to you, forever.",
                icon: Globe,
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-purple-500/10 text-purple-300 border-purple-500/20"
            >
              How it Works
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple steps to build your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                onchain credibility
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Wallet",
                description:
                  "Link your Ethereum wallet and Farcaster account to start building your onchain identity.",
              },
              {
                step: "02",
                title: "Give & Receive Endorsements",
                description:
                  "Endorse other builders and receive endorsements for your work. All verifiable onchain.",
              },
              {
                step: "03",
                title: "Schedule & Grow",
                description:
                  "Use smart scheduling to optimize your casts and grow your reputation across channels.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-lg mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ChevronRight className="w-6 h-6 text-gray-600 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by builders across the ecosystem
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-gray-300">
                4.9/5 from 200+ builders
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "CastCred has transformed how I build trust with my community. The onchain endorsements are game-changing.",
                author: "Sarah Chen",
                role: "Protocol Engineer",
              },
              {
                quote:
                  "The scheduling features helped me grow my Farcaster following by 300% in just two months.",
                author: "Marcus Rodriguez",
                role: "DeFi Builder",
              },
              {
                quote:
                  "Finally, a way to quantify and showcase reputation in web3. The API integration was seamless.",
                author: "Alex Thompson",
                role: "Full-stack Developer",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
              >
                <p className="text-gray-300 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              onchain reputation?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of builders who are already using CastCred to grow
            their trust and visibility in the decentralized ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg font-medium text-white px-8 py-2 transition-colors"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CastCred
              </span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Docs
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 CastCred. Built for the decentralized future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
