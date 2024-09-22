import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    domains: ['kcxqbkwxvnlhzxvwlnpv.supabase.co'],
  },
}

export default withPayload(nextConfig)
