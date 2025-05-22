/*
 * LayerLeap Bridge Project - All Files
 * 
 * This file contains all the code for the LayerLeap Bridge project.
 * After uploading to GitHub, extract each section into its own file.
 * 
 * INSTRUCTIONS:
 * 1. Upload this file to GitHub
 * 2. Clone the repository locally
 * 3. Extract each section into its own file with the correct path
 * 4. Push the changes back to GitHub
 * 5. Deploy from GitHub to Vercel
 */

// =====================================================================
// FILE: next.config.mjs
// =====================================================================
/*
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
*/

// =====================================================================
// FILE: tailwind.config.ts
// =====================================================================
/*
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
*/

// =====================================================================
// FILE: app/globals.css
// =====================================================================
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 210 100% 50%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 262.1 83.3% 57.8%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 262.1 83.3% 57.8%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 100% 60%;
    --primary-foreground: 210 40% 98%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 262.1 83.3% 57.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
*/

// =====================================================================
// FILE: app/layout.tsx
// =====================================================================
/*
import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LayerLeap - Master the Art of Airdrop Farming",
  description:
    "Comprehensive guides to help you maximize your chances of receiving valuable token airdrops across the crypto ecosystem.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
*/

// =====================================================================
// FILE: app/bridge/page.tsx
// =====================================================================
/*
"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeftRight, ChevronDown, ExternalLink, Info } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { WalletConnect } from "@/components/wallet-connect"
import { toast } from "@/components/ui/use-toast"

// LayerZero contract addresses by chain
const LAYERZERO_CONTRACTS = {
  ethereum: "0x0000000000000000000000000000000000000000", // Placeholder - replace with actual contract
  arbitrum: "0x9dB10F880726D87780afaf55f9144CC43FF8d567", // User's provided Arbitrum contract
  optimism: "0x2e04dD2F88AA6a88259c5006FD4C28312D5867B6", // Existing Optimism contract
  base: "0xEc47B2a848eE1b0AcB96b408A131058dcac7E7f3", // New Base contract
  zksync: "0x0000000000000000000000000000000000000000", // Placeholder - replace with actual contract
}

// Chain IDs for LayerZero
const CHAIN_IDS = {
  ethereum: 101,
  arbitrum: 110,
  optimism: 111,
  base: 184,
  zksync: 165,
}

// Special address for native ETH
const ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

// Token addresses by chain
const TOKEN_ADDRESSES = {
  ethereum: {
    ETH: ETH_ADDRESS,
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  },
  arbitrum: {
    ETH: ETH_ADDRESS,
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    USDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    USDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    WBTC: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  },
  optimism: {
    ETH: ETH_ADDRESS,
    WETH: "0x4200000000000000000000000000000000000006",
    USDC: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    USDT: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    WBTC: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
  },
  base: {
    ETH: ETH_ADDRESS,
    WETH: "0x4200000000000000000000000000000000000006",
    USDC: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    USDT: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    WBTC: "0x77852193BD608A5Db3Ff229A3BF77F5c7D667b9C",
  },
  zksync: {
    ETH: ETH_ADDRESS,
    WETH: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
    USDC: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    USDT: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
    WBTC: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
  },
}

// Network mapping - using decimal strings for proper comparison
const NETWORK_MAPPING = {
  ethereum: "1",
  arbitrum: "42161",
  optimism: "10",
  base: "8453",
  zksync: "324",
}

export default function BridgePage() {
  const [sourceChain, setSourceChain] = useState("arbitrum") // Default to Arbitrum since we have that contract
  const [destinationChain, setDestinationChain] = useState("base") // Default to Base since we have that contract
  const [amount, setAmount] = useState("")
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [selectedToken, setSelectedToken] = useState("WETH") // Default to WETH for compatibility
  const [bridgeProvider, setBridgeProvider] = useState("layerzero")
  const [txHash, setTxHash] = useState<string | null>(null)
  const [txStatus, setTxStatus] = useState<"pending" | "success" | "error" | null>(null)
  const [balance, setBalance] = useState<string>("0")
  const [currentChainId, setCurrentChainId] = useState<string>("")
  const [isApproving, setIsApproving] = useState(false)
  const [errorDetails, setErrorDetails] = useState<string | null>(null)
  const [debugMode, setDebugMode] = useState(false)

  // Check if we're on the correct network for the selected source chain
  const isCorrectNetwork = useCallback(() => {
    if (!currentChainId || !sourceChain) return false

    // Convert hex chainId to decimal for comparison
    const decimalChainId = Number.parseInt(currentChainId, 16).toString()
    return decimalChainId === NETWORK_MAPPING[sourceChain as keyof typeof NETWORK_MAPPING]
  }, [currentChainId, sourceChain])

  // Handle network switching
  const switchNetwork = async () => {
    if (!window.ethereum) return

    const networkParams: Record<string, any> = {
      ethereum: {
        chainId: "0x1",
      },
      arbitrum: {
        chainId: "0xa4b1", // 42161
        chainName: "Arbitrum One",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://arb1.arbitrum.io/rpc"],
        blockExplorerUrls: ["https://arbiscan.io/"],
      },
      optimism: {
        chainId: "0xa", // 10
        chainName: "Optimism",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.optimism.io"],
        blockExplorerUrls: ["https://optimistic.etherscan.io/"],
      },
      base: {
        chainId: "0x2105", // 8453
        chainName: "Base",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.base.org"],
        blockExplorerUrls: ["https://basescan.org/"],
      },
      zksync: {
        chainId: "0x144", // 324
        chainName: "zkSync Era",
        nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
        rpcUrls: ["https://mainnet.era.zksync.io"],
        blockExplorerUrls: ["https://explorer.zksync.io/"],
      },
    }

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: networkParams[sourceChain].chainId }],
      })
    } catch (error: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[sourceChain]],
          })
        } catch (addError) {
          console.error(addError)
        }
      }
      console.error(error)
    }
  }

  const handleSwapChains = () => {
    const temp = sourceChain
    setSourceChain(destinationChain)
    setDestinationChain(temp)
  }

  const handleConnect = (address: string) => {
    setIsWalletConnected(true)
    setWalletAddress(address)
  }

  const handleDisconnect = () => {
    setIsWalletConnected(false)
    setWalletAddress("")
    setBalance("0")
  }

  // Fetch balance using Web3
  const fetchBalance = async () => {
    if (!window.ethereum || !walletAddress) {
      setBalance("0")
      return
    }

    try {
      // Check if we're on the correct network
      const chainId = await window.ethereum.request({ method: "eth_chainId" })
      const decimalChainId = Number.parseInt(chainId, 16).toString()
      const expectedChainId = NETWORK_MAPPING[sourceChain as keyof typeof NETWORK_MAPPING]

      if (decimalChainId !== expectedChainId) {
        console.log(`Wrong network. Expected: ${expectedChainId}, Got: ${decimalChainId}`)
        setBalance("0")
        return
      }

      // Get the token address for the selected token on the current chain
      const tokenAddress =
        TOKEN_ADDRESSES[sourceChain as keyof typeof TOKEN_ADDRESSES]?.[
          selectedToken as keyof (typeof TOKEN_ADDRESSES)[keyof typeof TOKEN_ADDRESSES]
        ]

      if (!tokenAddress) {
        console.error("Token address not found")
        setBalance("0")
        return
      }

      // If the token is ETH, fetch the native balance
      if (selectedToken === "ETH") {
        const balanceHex = await window.ethereum.request({
          method: "eth_getBalance",
          params: [walletAddress, "latest"],
        })

        // Convert hex balance to decimal
        const balanceWei = Number.parseInt(balanceHex, 16)
        const balanceEth = balanceWei / 1e18
        setBalance(balanceEth.toString())
        return
      }

      // For ERC20 tokens
      // Function signature for balanceOf(address)
      const balanceOfSignature = "0x70a08231"
      // Pad the address to 32 bytes (remove 0x prefix, pad with zeros, add back 0x)
      const paddedAddress = "0x" + walletAddress.slice(2).padStart(64, "0")

      // Create the data for the eth_call
      const data = balanceOfSignature + paddedAddress

      // Call the balanceOf function
      const balanceHex = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            to: tokenAddress,
            data,
          },
          "latest",
        ],
      })

      // Convert hex balance to decimal
      const balanceWei = Number.parseInt(balanceHex, 16)

      // Get token decimals (most tokens use 18, but USDC uses 6, etc.)
      let decimals = 18
      if (selectedToken === "USDC" || selectedToken === "USDT") {
        decimals = 6
      }

      const balanceToken = balanceWei / Math.pow(10, decimals)
      setBalance(balanceToken.toString())
    } catch (error) {
      console.error("Error fetching balance:", error)
      setBalance("0")
    }
  }

  // Update balance when relevant states change
  useEffect(() => {
    if (isWalletConnected && walletAddress) {
      fetchBalance()
    } else {
      setBalance("0")
    }
  }, [isWalletConnected, walletAddress, sourceChain, selectedToken, currentChainId])

  // Listen for chain changes
  useEffect(() => {
    if (window.ethereum) {
      const handleChainChanged = (chainId: string) => {
        console.log("Chain changed to:", chainId)
        setCurrentChainId(chainId)
      }

      // Get current chain ID
      window.ethereum
        .request({ method: "eth_chainId" })
        .then((chainId: string) => {
          console.log("Current chain ID:", chainId)
          setCurrentChainId(chainId)
        })
        .catch((error) => {
          console.error("Error getting chain ID:", error)
        })

      window.ethereum.on("chainChanged", handleChainChanged)

      return () => {
        window.ethereum.removeListener("chainChanged", handleChainChanged)
      }
    }
  }, [])

  // Wait for transaction to be mined
  const waitForTransaction = async (txHash: string) => {
    return new Promise((resolve, reject) => {
      const checkReceipt = async () => {
        try {
          const receipt = await window.ethereum.request({
            method: "eth_getTransactionReceipt",
            params: [txHash],
          })

          if (receipt) {
            resolve(receipt)
          } else {
            setTimeout(checkReceipt, 2000) // Check again in 2 seconds
          }
        } catch (error) {
          reject(error)
        }
      }

      checkReceipt()
    })
  }

  // Function to estimate gas for a transaction
  const estimateGas = async (txParams: any) => {
    try {
      const gasEstimate = await window.ethereum.request({
        method: "eth_estimateGas",
        params: [txParams],
      })
      return gasEstimate
    } catch (error) {
      console.error("Gas estimation error:", error)
      // If gas estimation fails, return a default high gas limit
      return "0x1000000" // 16,777,216 gas
    }
  }

  const handleBridge = async () => {
    console.log("Bridge function called")
    setErrorDetails(null)

    if (!isWalletConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue",
        variant: "destructive",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to bridge",
        variant: "destructive",
      })
      return
    }

    if (!isCorrectNetwork()) {
      toast({
        title: "Wrong network",
        description: `Please switch to ${getChainName(sourceChain)} network`,
        variant: "destructive",
      })
      return
    }

    // Get contract addresses
    const sourceContract = LAYERZERO_CONTRACTS[sourceChain as keyof typeof LAYERZERO_CONTRACTS]
    const destChainId = CHAIN_IDS[destinationChain as keyof typeof CHAIN_IDS]
    const tokenAddress =
      TOKEN_ADDRESSES[sourceChain as keyof typeof TOKEN_ADDRESSES]?.[
        selectedToken as keyof (typeof TOKEN_ADDRESSES)[keyof typeof TOKEN_ADDRESSES]
      ]

    if (sourceContract === "0x0000000000000000000000000000000000000000") {
      toast({
        title: "Contract not deployed",
        description: `The bridge contract is not yet deployed on ${getChainName(sourceChain)}`,
        variant: "destructive",
      })
      return
    }

    if (!tokenAddress) {
      toast({
        title: "Token not supported",
        description: `${selectedToken} is not supported on ${getChainName(sourceChain)}`,
        variant: "destructive",
      })
      return
    }

    try {
      setTxStatus("pending")

      // Convert amount to wei
      let decimals = 18
      if (selectedToken === "USDC" || selectedToken === "USDT") {
        decimals = 6
      }
      const amountInWei = BigInt(Math.floor(Number.parseFloat(amount) * 10 ** decimals)).toString()

      // For tokens other than ETH, we need to approve the contract first
      if (selectedToken !== "ETH") {
        setIsApproving(true)

        try {
          // Check current allowance
          const allowanceCall = {
            to: tokenAddress,
            data:
              "0xdd62ed3e" + // allowance(address,address)
              walletAddress.slice(2).padStart(64, "0") + // owner
              sourceContract.slice(2).padStart(64, "0"), // spender
          }

          const allowanceResult = await window.ethereum.request({
            method: "eth_call",
            params: [allowanceCall, "latest"],
          })

          const currentAllowance = BigInt(allowanceResult)

          if (debugMode) {
            console.log("Current allowance:", currentAllowance.toString())
            console.log("Required amount:", amountInWei)
          }

          if (currentAllowance < BigInt(amountInWei)) {
            // Need to approve
            // Use max uint256 for unlimited approval
            const maxUint256 = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

            const approveTx = {
              from: walletAddress,
              to: tokenAddress,
              data:
                "0x095ea7b3" + // approve(address,uint256)
                sourceContract.slice(2).padStart(64, "0") + // spender
                maxUint256.slice(2), // amount (max uint256)
            }

            const approveTxHash = await window.ethereum.request({
              method: "eth_sendTransaction",
              params: [approveTx],
            })

            toast({
              title: "Approval Pending",
              description: "Please confirm the approval transaction in your wallet",
            })

            // Wait for approval to be mined
            let approvalConfirmed = false
            while (!approvalConfirmed) {
              await new Promise((resolve) => setTimeout(resolve, 2000))
              const receipt = await window.ethereum.request({
                method: "eth_getTransactionReceipt",
                params: [approveTxHash],
              })

              if (receipt && receipt.status === "0x1") {
                approvalConfirmed = true
              } else if (receipt && receipt.status === "0x0") {
                throw new Error("Approval transaction failed")
              }
            }

            toast({
              title: "Approval Successful",
              description: "Token approved for bridging",
            })
          }
        } catch (error) {
          console.error("Approval error:", error)
          setTxStatus(null)
          setIsApproving(false)
          toast({
            title: "Approval Failed",
            description: error.message || "Failed to approve token for bridging",
            variant: "destructive",
          })
          return
        }

        setIsApproving(false)
      }

      // Fixed bridge fee (0.0003 ETH)
      const bridgeFee = BigInt(Math.floor(0.0003 * 10 ** 18))

      // Calculate total value to send
      let totalValue
      if (selectedToken === "ETH") {
        // For native ETH, we need to send both the bridge fee and the amount
        totalValue = bridgeFee + BigInt(amountInWei)
      } else {
        // For tokens, we only need to send the bridge fee
        totalValue = bridgeFee
      }

      // Try multiple function signatures to see which one works
      // These are common function signatures for different bridge implementations
      const possibleFunctionSignatures = [
        // Try a simpler bridge function first (common in many bridges)
        {
          name: "bridge(uint16,address,uint256)",
          signature: "0x0e5c0250",
          data: () =>
            "0x0e5c0250" +
            destChainId.toString(16).padStart(64, "0") +
            walletAddress.slice(2).padStart(64, "0") +
            BigInt(amountInWei).toString(16).padStart(64, "0"),
        },
        // Try a standard OFT bridge function
        {
          name: "sendFrom(address,uint16,bytes32,uint256)",
          signature: "0x9f3ce55a",
          data: () =>
            "0x9f3ce55a" +
            walletAddress.slice(2).padStart(64, "0") +
            destChainId.toString(16).padStart(64, "0") +
            walletAddress.slice(2).padStart(64, "0") +
            BigInt(amountInWei).toString(16).padStart(64, "0"),
        },
        // Try the function we were using before
        {
          name: "sendFrom(uint16,bytes,address,uint256,address)",
          signature: "0xd73d0b4e",
          data: () => {
            const adapterParams = "0x00010000000000000000000000000000000000000000000000000000000000989680"

            const encodedDestChainId = destChainId.toString(16).padStart(64, "0")
            const encodedRecipient = walletAddress.slice(2).padStart(64, "0")
            const encodedAmount = BigInt(amountInWei).toString(16).padStart(64, "0")
            const encodedRefundAddress = walletAddress.slice(2).padStart(64, "0")
            const adapterParamsOffset = "00000000000000000000000000000000000000000000000000000000000000a0"
            const adapterParamsLength = "0000000000000000000000000000000000000000000000000000000000000022"
            const adapterParamsData = adapterParams.slice(2)

            return (
              "0xd73d0b4e" +
              encodedDestChainId +
              encodedRecipient +
              encodedAmount +
              encodedRefundAddress +
              adapterParamsOffset +
              adapterParamsLength +
              adapterParamsData
            )
          },
        },
      ]

      // Use the first function signature by default
      const selectedFunctionData = possibleFunctionSignatures[0].data()

      if (debugMode) {
        console.log("Using function:", possibleFunctionSignatures[0].name)
        console.log("Function signature:", possibleFunctionSignatures[0].signature)
        console.log("Transaction value:", totalValue.toString())
        console.log("Token amount in wei:", amountInWei)
      }

      // Set appropriate gas limits based on the network
      let gasLimit
      switch (sourceChain) {
        case "arbitrum":
          gasLimit = "0x2000000" // Higher gas limit for Arbitrum (33,554,432)
          break
        case "optimism":
          gasLimit = "0x1000000" // Medium gas limit for Optimism (16,777,216)
          break
        default:
          gasLimit = "0x800000" // Default gas limit (8,388,608)
      }

      // Prepare the bridge transaction
      const bridgeTx = {
        from: walletAddress,
        to: sourceContract,
        value: "0x" + totalValue.toString(16), // Bridge fee only for tokens, bridge fee + amount for ETH
        data: selectedFunctionData,
        gas: gasLimit,
      }

      if (debugMode) {
        console.log("Final transaction:", bridgeTx)
      }

      // Try to estimate gas first to catch any potential errors
      try {
        const estimatedGas = await estimateGas(bridgeTx)
        bridgeTx.gas = estimatedGas

        if (debugMode) {
          console.log("Estimated gas:", estimatedGas)
        }
      } catch (error) {
        console.warn("Gas estimation failed, using default gas limit:", error)
        // Continue with the default gas limit

        if (debugMode) {
          console.error("Gas estimation error details:", error)
        }
      }

      // Send the transaction
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [bridgeTx],
      })

      setTxHash(txHash)

      toast({
        title: "Bridge Transaction Sent",
        description: "Your transaction has been submitted to the blockchain",
      })

      // Wait for transaction to be mined
      const receipt = await waitForTransaction(txHash)

      if (receipt.status === "0x1") {
        setTxStatus("success")
        toast({
          title: "Bridge Successful",
          description: `Your ${amount} ${selectedToken} is being bridged to ${getChainName(destinationChain)}`,
        })
      } else {
        setTxStatus("error")
        toast({
          title: "Bridge Failed",
          description: "Transaction was mined but failed. Please check the explorer for details.",
          variant: "destructive",
        })
      }

      console.log(
        `Bridging ${amount} ${selectedToken} from ${sourceChain} (${sourceContract}) to ${destinationChain} using ${bridgeProvider}`,
      )
    } catch (error) {
      console.error("Bridge error:", error)
      setTxStatus("error")

      // Extract and display more detailed error information
      let errorMessage = "Failed to send bridge transaction"
      if (error.message) {
        errorMessage = error.message

        // Try to extract more detailed error information
        if (error.data) {
          setErrorDetails(error.data)
        } else if (typeof error === "object") {
          setErrorDetails(JSON.stringify(error, null, 2))
        }
      }

      toast({
        title: "Bridge Failed",
        description: errorMessage,
        variant: "destructive",
      })
    }
  }

  const getChainLogo = (chain: string) => {
    switch (chain) {
      case "ethereum":
        return "/images/eth.png"
      case "arbitrum":
        return "/images/arb.png"
      case "optimism":
        return "/images/op.png"
      case "base":
        return "/images/base.png"
      case "zksync":
        return "/images/zkSync.png"
      default:
        return "/images/eth.png"
    }
  }

  const getChainName = (chain: string) => {
    switch (chain) {
      case "ethereum":
        return "Ethereum"
      case "arbitrum":
        return "Arbitrum"
      case "optimism":
        return "Optimism"
      case "base":
        return "Base"
      case "zksync":
        return "zkSync"
      default:
        return "Ethereum"
    }
  }

  const getExplorerUrl = (chain: string, hash: string) => {
    switch (chain) {
      case "ethereum":
        return `https://etherscan.io/tx/${hash}`
      case "arbitrum":
        return `https://arbiscan.io/tx/${hash}`
      case "optimism":
        return `https://optimistic.etherscan.io/tx/${hash}`
      case "base":
        return `https://basescan.org/tx/${hash}`
      case "zksync":
        return `https://explorer.zksync.io/tx/${hash}`
      default:
        return `https://etherscan.io/tx/${hash}`
    }
  }

  const hasContractForChain = (chain: string) => {
    const address = LAYERZERO_CONTRACTS[chain as keyof typeof LAYERZERO_CONTRACTS]
    return address && address !== "0x0000000000000000000000000000000000000000"
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <header className="flex justify-between items-center px-10 py-4 bg-[#0d1224] border-b border-gray-800">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="LayerLeap Logo" width={160} height={40} className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDebugMode(!debugMode)}
            className={`${debugMode ? "bg-blue-900/30" : "bg-transparent"} text-xs`}
          >
            Debug Mode {debugMode ? "ON" : "OFF"}
          </Button>
          <WalletConnect isConnected={isWalletConnected} onConnect={handleConnect} onDisconnect={handleDisconnect} />
        </div>
      </header>

      <main className="container max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Cross-Chain Bridge</h1>

        <Tabs defaultValue="layerzero" className="w-full" onValueChange={setBridgeProvider}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="layerzero" className="text-lg py-3">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5" />
                LayerZero Bridge
              </div>
            </TabsTrigger>
            <TabsTrigger value="hyperlane" className="text-lg py-3">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5" />
                Hyperlane Bridge
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="layerzero" className="mt-0">
            <Card className="bg-[#1a2238] border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Source Chain</label>
                      <Select value={sourceChain} onValueChange={setSourceChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(sourceChain) || "/placeholder.svg"}
                                alt={getChainName(sourceChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(sourceChain)}
                              {hasContractForChain(sourceChain) && (
                                <span className="ml-1 text-xs text-green-500">✓</span>
                              )}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                              <span className="ml-1 text-xs text-green-500">✓</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                              <span className="ml-1 text-xs text-green-500">✓</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                              <span className="ml-1 text-xs text-green-500">✓</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSwapChains}
                      className="rounded-full bg-[#0d1224] p-2 hover:bg-[#2563eb]/20"
                    >
                      <ArrowLeftRight className="h-6 w-6" />
                    </Button>

                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Destination Chain</label>
                      <Select value={destinationChain} onValueChange={setDestinationChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(destinationChain) || "/placeholder.svg"}
                                alt={getChainName(destinationChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(destinationChain)}
                              {hasContractForChain(destinationChain) && (
                                <span className="ml-1 text-xs text-green-500">✓</span>
                              )}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm text-gray-400">Select Token</label>
                      <div className="text-sm text-gray-400">
                        Balance:{" "}
                        {isWalletConnected
                          ? isCorrectNetwork()
                            ? `${Number.parseFloat(balance).toFixed(6)} ${selectedToken}`
                            : "Wrong Network"
                          : "-.--"}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="bg-[#0d1224] border-gray-700 flex-shrink-0">
                            {selectedToken}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#0d1224] border-gray-700">
                          <DropdownMenuItem onClick={() => setSelectedToken("ETH")}>ETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WETH")}>WETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDC")}>USDC</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDT")}>USDT</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WBTC")}>WBTC</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full p-3 bg-[#0d1224] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 font-medium"
                          onClick={() => isWalletConnected && setAmount(balance)}
                          disabled={!isWalletConnected || balance === "0"}
                        >
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contract information */}
                  <div className="p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Contract Information</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#0d1224] border-gray-700">
                            <p className="max-w-xs">
                              These are the LayerZero contracts that will handle your cross-chain transaction
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Source Contract:</span>
                        <div className="flex items-center">
                          <span className="font-mono">
                            {LAYERZERO_CONTRACTS[sourceChain as keyof typeof LAYERZERO_CONTRACTS].substring(0, 6)}...
                            {LAYERZERO_CONTRACTS[sourceChain as keyof typeof LAYERZERO_CONTRACTS].substring(38)}
                          </span>
                          {hasContractForChain(sourceChain) ? (
                            <span className="ml-1 text-green-500">✓</span>
                          ) : (
                            <span className="ml-1 text-yellow-500">⚠</span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Destination Contract:</span>
                        <div className="flex items-center">
                          <span className="font-mono">
                            {LAYERZERO_CONTRACTS[destinationChain as keyof typeof LAYERZERO_CONTRACTS].substring(0, 6)}
                            ...
                            {LAYERZERO_CONTRACTS[destinationChain as keyof typeof LAYERZERO_CONTRACTS].substring(38)}
                          </span>
                          {hasContractForChain(destinationChain) ? (
                            <span className="ml-1 text-green-500">✓</span>
                          ) : (
                            <span className="ml-1 text-yellow-500">⚠</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {(!hasContractForChain(sourceChain) || !hasContractForChain(destinationChain)) && (
                      <div className="mt-2 text-xs text-yellow-500">
                        Warning: Some contracts are not yet deployed. Bridge functionality may be limited.
                      </div>
                    )}
                  </div>

                  {/* LayerZero specific parameters */}
                  <div className="space-y-4 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">LayerZero Parameters</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0d1224] border-gray-700">
                              <p className="max-w-xs">
                                These parameters configure how your cross-chain transaction is processed
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-500">
                        Advanced
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Gas on Destination</label>
                        <Select defaultValue="recommended">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select gas option" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="low">Low (Slower)</SelectItem>
                            <SelectItem value="recommended">Recommended</SelectItem>
                            <SelectItem value="high">High (Faster)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Slippage Tolerance</label>
                        <Select defaultValue="0.5">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select slippage" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="0.1">0.1%</SelectItem>
                            <SelectItem value="0.5">0.5%</SelectItem>
                            <SelectItem value="1.0">1.0%</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Bridge Fee</span>
                      <span className="text-sm">0.0003 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Gas</span>
                      <span className="text-sm">0.002 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Time</span>
                      <span className="text-sm">~15 minutes</span>
                    </div>
                  </div>

                  {selectedToken === "ETH" && (
                    <div className="p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg text-sm">
                      <p className="font-medium text-yellow-400">Native ETH Bridging</p>
                      <p className="text-gray-300 mt-1">
                        When bridging native ETH, the transaction value will include both the bridge fee (0.0003 ETH)
                        and your bridged amount ({amount} ETH).
                      </p>
                    </div>
                  )}

                  {txStatus && (
                    <div
                      className={`p-4 rounded-lg border ${
                        txStatus === "pending"
                          ? "bg-yellow-900/20 border-yellow-700"
                          : txStatus === "success"
                            ? "bg-green-900/20 border-green-700"
                            : "bg-red-900/20 border-red-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium mb-1">
                            {txStatus === "pending"
                              ? "Transaction Pending"
                              : txStatus === "success"
                                ? "Transaction Successful"
                                : "Transaction Failed"}
                          </p>
                          {txHash && (
                            <p className="text-xs text-gray-400">
                              Transaction Hash: {txHash.substring(0, 6)}...{txHash.substring(62)}
                            </p>
                          )}
                        </div>
                        {txHash && (
                          <a
                            href={getExplorerUrl(sourceChain, txHash)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs text-blue-400 hover:text-blue-300"
                          >
                            View <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>

                      {errorDetails && (
                        <div className="mt-2 p-2 bg-red-900/20 rounded border border-red-700 text-xs overflow-auto max-h-32">
                          <p className="font-medium mb-1">Error Details:</p>
                          <pre className="whitespace-pre-wrap">{errorDetails}</pre>
                        </div>
                      )}
                    </div>
                  )}

                  {isWalletConnected && !isCorrectNetwork() && (
                    <Button
                      className="w-full py-6 text-lg font-bold bg-[#2563eb] hover:bg-[#1d4ed8]"
                      onClick={switchNetwork}
                    >
                      Switch to {getChainName(sourceChain)} Network
                    </Button>
                  )}

                  {(!isWalletConnected || isCorrectNetwork()) && (
                    <Button
                      className="w-full py-6 text-lg font-bold bg-[#2563eb] hover:bg-[#1d4ed8]"
                      disabled={
                        !isWalletConnected ||
                        !amount ||
                        txStatus === "pending" ||
                        isApproving ||
                        !hasContractForChain(sourceChain) ||
                        !hasContractForChain(destinationChain)
                      }
                      onClick={handleBridge}
                    >
                      {!isWalletConnected
                        ? "Connect Wallet"
                        : !amount
                          ? "Enter Amount"
                          : isApproving
                            ? "Approving..."
                            : txStatus === "pending"
                              ? "Processing..."
                              : `Bridge ${selectedToken} to ${getChainName(destinationChain)}`}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hyperlane tab content remains the same */}
          <TabsContent value="hyperlane" className="mt-0">
            {/* Hyperlane content remains unchanged */}
            <Card className="bg-[#1a2238] border-gray-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Source Chain</label>
                      <Select value={sourceChain} onValueChange={setSourceChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(sourceChain) || "/placeholder.svg"}
                                alt={getChainName(sourceChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(sourceChain)}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSwapChains}
                      className="rounded-full bg-[#0d1224] p-2 hover:bg-[#2563eb]/20"
                    >
                      <ArrowLeftRight className="h-6 w-6" />
                    </Button>

                    <div className="space-y-2 w-5/12">
                      <label className="text-sm text-gray-400">Destination Chain</label>
                      <Select value={destinationChain} onValueChange={setDestinationChain}>
                        <SelectTrigger className="bg-[#0d1224] border-gray-700">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <Image
                                src={getChainLogo(destinationChain) || "/placeholder.svg"}
                                alt={getChainName(destinationChain)}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {getChainName(destinationChain)}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d1224] border-gray-700">
                          <SelectItem value="ethereum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/eth.png"
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Ethereum
                            </div>
                          </SelectItem>
                          <SelectItem value="arbitrum">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/arb.png"
                                alt="Arbitrum"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Arbitrum
                            </div>
                          </SelectItem>
                          <SelectItem value="optimism">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/op.png"
                                alt="Optimism"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Optimism
                            </div>
                          </SelectItem>
                          <SelectItem value="base">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/base.png"
                                alt="Base"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              Base
                            </div>
                          </SelectItem>
                          <SelectItem value="zksync">
                            <div className="flex items-center gap-2">
                              <Image
                                src="/images/zkSync.png"
                                alt="zkSync"
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              zkSync
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm text-gray-400">Select Token</label>
                      <div className="text-sm text-gray-400">
                        Balance: {isWalletConnected ? balance : "-.--"} {selectedToken}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="bg-[#0d1224] border-gray-700 flex-shrink-0">
                            {selectedToken}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#0d1224] border-gray-700">
                          <DropdownMenuItem onClick={() => setSelectedToken("ETH")}>ETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WETH")}>WETH</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDC")}>USDC</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("USDT")}>USDT</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSelectedToken("WBTC")}>WBTC</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          className="w-full p-3 bg-[#0d1224] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 font-medium"
                          onClick={() => isWalletConnected && setAmount(balance)}
                        >
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Hyperlane specific parameters */}
                  <div className="space-y-4 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">Hyperlane Parameters</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0d1224] border-gray-700">
                              <p className="max-w-xs">
                                These parameters configure how your cross-chain transaction is processed
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-500">
                        Advanced
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Interchain Security Module</label>
                        <Select defaultValue="default">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select ISM" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="optimistic">Optimistic</SelectItem>
                            <SelectItem value="multisig">Multisig</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-gray-400">Gas Payment</label>
                        <Select defaultValue="default">
                          <SelectTrigger className="h-8 text-xs bg-[#1a2238] border-gray-700">
                            <SelectValue placeholder="Select gas payment" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0d1224] border-gray-700">
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 p-4 bg-[#0d1224] rounded-lg border border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Bridge Fee</span>
                      <span className="text-sm">0.0003 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Gas</span>
                      <span className="text-sm">0.0015 ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Estimated Time</span>
                      <span className="text-sm">~10 minutes</span>
                    </div>
                  </div>
                  <Button
                    className="w-full py-6 text-lg font-bold bg-[#2563eb] hover:bg-[#1d4ed8]"
                    disabled={!isWalletConnected || !amount || txStatus === "pending"}
                    onClick={handleBridge}
                  >
                    {!isWalletConnected
                      ? "Connect Wallet"
                      : !amount
                        ? "Enter Amount"
                        : txStatus === "pending"
                          ? "Processing..."
                          : `Bridge ${selectedToken} to ${getChainName(destinationChain)}`}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-[#0d1224] py-5 px-5 text-center text-[#a0aec0] text-sm mt-auto">
        &copy; 2025 LayerLeap. All rights reserved.
      </footer>
    </div>
  )
}
*/

// =====================================================================
// FILE: components/wallet-connect.tsx
// =====================================================================
/*
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Copy, ExternalLink, LogOut, Wallet, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

interface WalletConnectProps {
  isConnected: boolean
  onConnect: (address: string) => void
  onDisconnect: () => void
}

export function WalletConnect({ isConnected, onConnect, onDisconnect }: WalletConnectProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [address, setAddress] = useState<string>("")
  const [chainId, setChainId] = useState<string>("")

  // Check if MetaMask is installed
  const isMetaMaskInstalled = typeof window !== "undefined" && typeof window.ethereum !== "undefined"

  // Handle account changes
  useEffect(() => {
    if (isMetaMaskInstalled) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          onDisconnect()
          setAddress("")
        } else if (accounts[0] !== address) {
          // Account changed
          setAddress(accounts[0])
          onConnect(accounts[0])
        }
      }

      const handleChainChanged = (chainId: string) => {
        setChainId(chainId)
      }

      // Check if already connected
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAddress(accounts[0])
            onConnect(accounts[0])

            // Get current chain ID
            window.ethereum.request({ method: "eth_chainId" }).then((chainId: string) => {
              setChainId(chainId)
            })
          }
        })
        .catch((err: any) => {
          console.error(err)
        })

      // Set up event listeners
      window.ethereum.on("accountsChanged", handleAccountsChanged)
      window.ethereum.on("chainChanged", handleChainChanged)

      // Clean up event listeners
      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged)
        window.ethereum.removeListener("chainChanged", handleChainChanged)
      }
    }
  }, [address, onConnect, onDisconnect, isMetaMaskInstalled])

  const handleConnect = async () => {
    if (!isMetaMaskInstalled) {
      toast({
        title: "MetaMask not installed",
        description: "Please install MetaMask to connect your wallet",
        variant: "destructive",
      })
      return
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
      setAddress(accounts[0])
      onConnect(accounts[0])
      setIsDialogOpen(false)

      // Get current chain ID
      const chainId = await window.ethereum.request({ method: "eth_chainId" })
      setChainId(chainId)
    } catch (error) {
      console.error(error)
      toast({
        title: "Connection Failed",
        description: "Failed to connect to MetaMask",
        variant: "destructive",
      })
    }
  }

  const handleDisconnect = () => {
    setAddress("")
    onDisconnect()
  }

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    })
  }

  const getChainName = (chainId: string) => {
    const chains: Record<string, string> = {
      "0x1": "Ethereum",
      "0x89": "Polygon",
      "0xa": "Optimism",
      "0xa4b1": "Arbitrum",
      "0x2105": "Base",
      "0x144": "zkSync Era",
    }
    return chains[chainId] || "Unknown Network"
  }

  const viewOnExplorer = () => {
    const explorers: Record<string, string> = {
      "0x1": "https://etherscan.io/address/",
      "0x89": "https://polygonscan.com/address/",
      "0xa": "https://optimistic.etherscan.io/address/",
      "0xa4b1": "https://arbiscan.io/address/",
      "0x2105": "https://basescan.org/address/",
      "0x144": "https://explorer.zksync.io/address/",
    }

    const baseUrl = explorers[chainId] || "https://etherscan.io/address/"
    window.open(`${baseUrl}${address}`, "_blank")
  }

  if (isConnected && address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-[#0d1224] border-gray-700">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-green-500"></div>
              <span>{truncateAddress(address)}</span>
              <span className="text-xs text-gray-400">({getChainName(chainId)})</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#0d1224] border-gray-700">
          <DropdownMenuItem className="flex items-center gap-2" onClick={copyToClipboard}>
            <Copy className="h-4 w-4" />
            <span>Copy Address</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2" onClick={viewOnExplorer}>
            <ExternalLink className="h-4 w-4" />
            <span>View on Explorer</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 text-red-500" onClick={handleDisconnect}>
            <LogOut className="h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1a2238] border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription className="text-gray-400">
            Connect your wallet to bridge assets across chains
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center justify-between p-6 bg-[#0d1224] border-gray-700 hover:bg-[#0d1224]/80"
            onClick={handleConnect}
          >
            <span className="text-lg font-medium">MetaMask</span>
            <Image src="/placeholder.svg?height=40&width=40" alt="MetaMask" width={40} height={40} />
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-between p-6 bg-[#0d1224] border-gray-700 hover:bg-[#0d1224]/80"
            disabled
          >
            <span className="text-lg font-medium">WalletConnect</span>
            <Image src="/placeholder.svg?height=40&width=40" alt="WalletConnect" width={40} height={40} />
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-between p-6 bg-[#0d1224] border-gray-700 hover:bg-[#0d1224]/80"
            disabled
          >
            <span className="text-lg font-medium">Coinbase Wallet</span>
            <Image src="/placeholder.svg?height=40&width=40" alt="Coinbase Wallet" width={40} height={40} />
          </Button>
        </div>
        {!isMetaMaskInstalled && (
          <div className="text-yellow-400 text-sm mt-2">
            MetaMask is not installed. Please install MetaMask to connect your wallet.
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
*/

// =====================================================================
// FILE: components/site-footer.tsx
// =====================================================================
/*
export function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
        <p>© 2025 LayerLeap. All rights reserved.</p>
        <p className="mt-2">Disclaimer: Airdrop farming carries risks. Always do your own research.</p>
      </div>
    </footer>
  )
}
*/

// =====================================================================
// FILE: components/site-header.tsx
// =====================================================================
/*
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { User, LogOut, Menu, X } from 'lucide-react'
import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User as SupabaseUser } from "@supabase/supabase-js"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient()

  // Handle authentication directly in this component
  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true)
        const { data } = await supabase.auth.getUser()
        setUser(data.user)
      } catch (error) {
        console.error("Error fetching user:", error)
      } finally {
        setIsLoading(false)
      }
    }

    getUser()

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
      }
    })

    // Clean up listener on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  // Sign out function
  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      // No need to setUser(null) here as the onAuthStateChange listener will handle it
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="LayerLeap Logo" className="h-8 w-auto mr-2" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex ml-6 space-x-4">
              <Link
                href="/guides"
                className={`text-sm ${pathname?.startsWith("/guides") ? "text-white font-medium" : "text-slate-400 hover:text-white"}`}
              >
                Guides
              </Link>
              <Link
                href="/waitlists"
                className={`text-sm ${pathname?.startsWith("/waitlists") ? "text-white font-medium" : "text-slate-400 hover:text-white"}`}
              >
                Waitlists
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="animate-pulse h-8 w-20 bg-slate-800 rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="flex items-center text-sm text-slate-400 hover:text-white">
                  <User className="h-4 w-4 mr-1" />
                  {user.email?.split("@")[0]}
                </Link>
                <Button variant="ghost" size="sm" onClick={() => signOut()} className="text-slate-400 hover:text-white">
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/auth/sign-in">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 pb-4">
          <div className="pt-2 border-t border-slate-800 px-4">
            {/* Mobile Navigation Links */}
            <nav className="py-2">
              <Link
                href="/guides"
                className={`block py-2 text-sm ${pathname?.startsWith("/guides") ? "text-white font-medium" : "text-slate-400"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/waitlists"
                className={`block py-2 text-sm ${pathname?.startsWith("/waitlists") ? "text-white font-medium" : "text-slate-400"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Waitlists
              </Link>
            </nav>

            {isLoading ? (
              <div className="animate-pulse h-8 w-full bg-slate-800 rounded"></div>
            ) : user ? (
              <div className="space-y-2">
                <Link
                  href="/dashboard"
                  className="flex items-center text-sm text-slate-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    signOut()
                    setMobileMenuOpen(false)
                  }}
                  className="text-slate-400 w-full justify-start"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link href="/auth/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/sign-up" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
*/

// =====================================================================
// FILE: contexts/auth-context.tsx
// =====================================================================
/*
"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { SupabaseClient, User } from "@supabase/supabase-js"

type AuthContextType = {
  supabase: SupabaseClient
  user: User | null
  isLoading: boolean
  signUp: (
    email: string,
    password: string,
  ) => Promise<{
    error: any | null
    success: boolean
  }>
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    error: any | null
    success: boolean
  }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setIsLoading(false)
    }

    getUser()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true }
    } catch (error) {
      return { error, success: false }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true }
    } catch (error) {
      return { error, success: false }
    }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        supabase,
        user,
        isLoading,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
*/

// =====================================================================
// FILE: lib/supabase.ts
// =====================================================================
/*
import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the browser
const createBrowserClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Singleton pattern to avoid multiple instances
let browserClient: ReturnType<typeof createClient> | null = null

export const getSupabaseBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

// Server client with service role for admin operations
export const createServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!
  return createClient(supabaseUrl, supabaseServiceKey)
}

export { createClient }
*/

// =====================================================================
// FILE: app/page.tsx
// =====================================================================
/*
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cross-Chain Bridge for <span className="text-blue-500">LayerZero</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Bridge your assets seamlessly across multiple blockchains with our secure and efficient cross-chain bridge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/bridge">
                <Button size="lg" className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
                  Launch Bridge
                </Button>
              </Link>
              <Link href="/guides">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                  View Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0d1224]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Supported Networks</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
              <div className="flex flex-col items-center">
                <img src="/images/eth.png" alt="Ethereum" className="w-16 h-16 mb-3" />
                <span className="font-medium">Ethereum</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/arb.png" alt="Arbitrum" className="w-16 h-16 mb-3" />
                <span className="font-medium">Arbitrum</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/op.png" alt="Optimism" className="w-16 h-16 mb-3" />
                <span className="font-medium">Optimism</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/base.png" alt="Base" className="w-16 h-16 mb-3" />
                <span className="font-medium">Base</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/zkSync.png" alt="zkSync" className="w-16 h-16 mb-3" />
                <span className="font-medium">zkSync Era</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Bridge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a2238] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Security First</h3>
                <p className="text-gray-400">
                  Our bridge is built on top of battle-tested protocols like LayerZero and Hyperlane, ensuring your
                  assets are always secure during cross-chain transfers.
                </p>
              </div>
              <div className="bg-[#1a2238] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Low Fees</h3>
                <p className="text-gray-400">
                  We optimize gas usage and bridge fees to provide you with the most cost-effective way to move your
                  assets across chains.
                </p>
              </div>
              <div className="bg-[#1a2238] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Fast Transfers</h3>
                <p className="text-gray-400">
                  Experience quick confirmation times with our optimized bridge, getting your assets to their destination
                  in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0d1224]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Bridge Your Assets?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              Start bridging your tokens across multiple blockchains with just a few clicks
            </p>
            <Link href="/bridge">
              <Button size="lg" className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
                Launch Bridge Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
*/

// =====================================================================
// INSTRUCTIONS FOR EXTRACTING THE CODE
// =====================================================================
/*
To extract this code into a proper project structure:

1. Create a new Next.js project:
   npx create-next-app@latest layerleap-bridge
   cd layerleap-bridge

2. Install required dependencies:
   npm install @supabase/supabase-js @supabase/auth-helpers-nextjs lucide-react

3. Copy each file section from this file into the appropriate location in your project.
   For example, copy the content between "FILE: app/bridge/page.tsx" markers
   into the file at app/bridge/page.tsx in your project.

4. Create the necessary directories if they don't exist.

5. Add the required environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - NEXT_PUBLIC_APP_URL

6. Add the chain logo images to the public/images directory:
   - logo.png
   - eth.png
   - arb.png
   - op.png
   - base.png
   - zkSync.png

7. Run the development server:
   npm run dev

8. Deploy to Vercel:
   - Push your code to GitHub
   - Connect your GitHub repository to Vercel
   - Add the environment variables in the Vercel dashboard
   - Deploy
*/