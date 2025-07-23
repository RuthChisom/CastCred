import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Code,
  BarChart2,
  Check,
} from "lucide-react";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Build Trust Onchain
                  </span>
                  <span className="block text-white mt-2">With CastCred</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The decentralized reputation protocol for Farcaster. Endorse
                  builders, schedule casts, and grow your onchain credibility.
                </p>
                <div className="mt-8 sm:mt-12">
                  <div className="rounded-md shadow">
                    <Link
                      href="/dashboard"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                    >
                      Launch App <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-full filter blur-3xl transform translate-x-1/4 translate-y-1/4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-800/50 backdrop-blur-sm rounded-full border-2 border-purple-500/30 flex items-center justify-center">
                    <Shield className="w-32 h-32 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A better way to build reputation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              CastCred brings verifiable credentials to Farcaster in a seamless,
              decentralized way.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Onchain Endorsements",
                  description:
                    "Give and receive verifiable endorsements that live on the blockchain.",
                  icon: Zap,
                },
                {
                  name: "Smart Scheduling",
                  description:
                    "Optimize your casts across multiple channels with intelligent scheduling.",
                  icon: BarChart2,
                },
                {
                  name: "Developer Tools",
                  description:
                    "Integrate reputation data into your apps with our developer API.",
                  icon: Code,
                },
                {
                  name: "Community Building",
                  description:
                    "Recognize valuable contributors and grow your community.",
                  icon: Users,
                },
                {
                  name: "Trust Scores",
                  description:
                    "Quantify reputation with our proprietary trust algorithm.",
                  icon: Shield,
                },
                {
                  name: "Decentralized",
                  description:
                    "Built on open protocols with no central authority.",
                  icon: Check,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-purple-500/10 p-2 rounded-lg">
                      <feature.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Start building your onchain reputation today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
