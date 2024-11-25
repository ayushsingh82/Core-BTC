import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => {
    // Add animation class to elements with fade-in class after component mounts
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0');
      }, 200 * index);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0D0D0D]/80 backdrop-blur-lg z-50 border-b border-[#2D2D2D]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-[#FFB800] font-bold text-2xl">CoreStable</div>
          <div className="flex gap-6">
            <a href="#features" className="text-[#B8860B] hover:text-[#FFB800] transition-colors">Features</a>
            <a href="#stats" className="text-[#B8860B] hover:text-[#FFB800] transition-colors">Stats</a>
            <a href="#roadmap" className="text-[#B8860B] hover:text-[#FFB800] transition-colors">Roadmap</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB800] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#8B4513] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFB800] to-[#FFA500] text-transparent bg-clip-text fade-in opacity-0 translate-y-4 transition-all duration-700">
            BTC-Backed Stablecoins on Core
          </h1>
          <p className="text-xl md:text-2xl text-[#B8860B] mb-8 fade-in opacity-0 translate-y-4 transition-all duration-700 delay-200">
            Unlock the power of your Bitcoin. Mint stablecoins without selling your BTC.
          </p>
          <div className="flex gap-4 justify-center fade-in opacity-0 translate-y-4 transition-all duration-700 delay-300">
            <button className="bg-gradient-to-r from-[#FFB800] to-[#FFA500] hover:opacity-90 text-black font-bold px-8 py-3 rounded-lg transition-all hover:scale-105">
              Launch App
            </button>
            <button className="border border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800]/10 px-8 py-3 rounded-lg font-bold transition-all hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFB800] to-[#FFA500] text-transparent bg-clip-text">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2D2D2D] hover:border-[#FFB800]/50 transition-all group hover:-translate-y-2 duration-300">
            <div className="text-[#FFB800] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-xl font-bold mb-4 text-[#FFB800]">Secure Collateral</h3>
            <p className="text-[#B8860B] mb-4">
              Your BTC remains secure in smart contracts while you mint stablecoins against its value
            </p>
            <ul className="space-y-2 text-[#B8860B]">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Multi-signature security
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Audited smart contracts
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Insurance coverage
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2D2D2D] hover:border-[#FFB800]/50 transition-all group hover:-translate-y-2 duration-300">
            <div className="text-[#FFB800] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">💱</div>
            <h3 className="text-xl font-bold mb-4 text-[#FFB800]">Price Stability</h3>
            <p className="text-[#B8860B] mb-4">
              Advanced mechanisms ensure our stablecoins maintain perfect dollar parity
            </p>
            <ul className="space-y-2 text-[#B8860B]">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Algorithmic stability
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Over-collateralization
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Real-time price feeds
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2D2D2D] hover:border-[#FFB800]/50 transition-all group hover:-translate-y-2 duration-300">
            <div className="text-[#FFB800] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-xl font-bold mb-4 text-[#FFB800]">Instant Liquidity</h3>
            <p className="text-[#B8860B] mb-4">
              Access liquid capital instantly without sacrificing your Bitcoin position
            </p>
            <ul className="space-y-2 text-[#B8860B]">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Instant minting
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Zero slippage
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Cross-chain support
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFB800]/5 to-transparent"></div>
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFB800] to-[#FFA500] text-transparent bg-clip-text relative z-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {[
            {
              step: "01",
              title: "Connect Wallet",
              description: "Link your Bitcoin wallet securely to our platform",
              icon: "🔗",
              details: "Compatible with MetaMask, Trust Wallet & more"
            },
            {
              step: "02",
              title: "Deposit BTC",
              description: "Lock your Bitcoin as collateral in our secure vault",
              icon: "💎",
              details: "Minimum deposit 0.1 BTC"
            },
            {
              step: "03",
              title: "Mint Stablecoins",
              description: "Generate USD-pegged stablecoins against your BTC",
              icon: "🔨",
              details: "Up to 70% of collateral value"
            },
            {
              step: "04",
              title: "Start Using",
              description: "Trade, invest, or earn yield with your stablecoins",
              icon: "🚀",
              details: "Instant transfers & swaps"
            }
          ].map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2D2D2D] hover:border-[#FFB800]/50 transition-all group-hover:scale-105 duration-300">
                <div className="text-[#FFB800] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-[#FFB800] text-xl font-bold mb-2">{item.step}</div>
                <h3 className="text-lg font-bold mb-3 text-[#FFB800]">{item.title}</h3>
                <p className="text-[#B8860B] mb-4">{item.description}</p>
                <div className="text-sm text-[#B8860B]/70">{item.details}</div>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FFB800] to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div id="roadmap" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#FFB800] to-[#FFA500] text-transparent bg-clip-text">
          Roadmap
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {[
              {
                quarter: "Q1 2025",
                title: "Platform Launch",
                items: [
                  "Initial platform deployment",
                  "Security audits completion",
                  "Beta testing phase",
                  "Community building"
                ]
              },
              {
                quarter: "Q2 2025",
                title: "Ecosystem Expansion",
                items: [
                  "DeFi protocol integrations",
                  "Cross-chain bridge launch",
                  "Liquidity mining program",
                  "Partnership announcements"
                ]
              },
              {
                quarter: "Q3 2025",
                title: "Governance & Growth",
                items: [
                  "Governance token launch",
                  "DAO formation",
                  "Advanced trading features",
                  "Mobile app release"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#FFB800] group-hover:scale-125 transition-transform"></div>
                  {index < 2 && <div className="w-0.5 h-24 bg-gradient-to-b from-[#FFB800] to-transparent"></div>}
                </div>
                <div className="flex-1 bg-[#1A1A1A] p-8 rounded-2xl border border-[#2D2D2D] group-hover:border-[#FFB800]/50 transition-all">
                  <div className="text-sm text-[#FFB800] mb-2">{phase.quarter}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#FFB800]">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center text-[#B8860B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16 border-t border-[#2D2D2D]">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#FFB800] mb-2">$100M+</div>
            <div className="text-[#B8860B]">Total Value Locked</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFB800] mb-2">50K+</div>
            <div className="text-[#B8860B]">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFB800] mb-2">1000+</div>
            <div className="text-[#B8860B]">Daily Transactions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FFB800] mb-2">99.9%</div>
            <div className="text-[#B8860B]">Uptime</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 relative">
        {/* Additional gradient effect */}
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#8B4513] rounded-full filter blur-[150px] opacity-20"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFB800] to-[#FFA500] text-transparent bg-clip-text">
            Ready to Get Started?
          </h2>
          <p className="text-[#B8860B] mb-8">
            Join the future of decentralized finance with BTC-backed stablecoins on Core
          </p>
          <button className="bg-gradient-to-r from-[#FFB800] to-[#FFA500] hover:opacity-90 text-black px-8 py-3 rounded-lg font-bold transition-all">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#2D2D2D] mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="text-[#FFB800] font-bold">CoreStable</div>
            <div className="flex gap-6">
              <a href="#" className="text-[#B8860B] hover:text-[#FFB800] transition-colors">Twitter</a>
              <a href="#" className="text-[#B8860B] hover:text-[#FFB800] transition-colors">Discord</a>
              <a href="#" className="text-[#B8860B] hover:text-[#FFB800] transition-colors">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home 