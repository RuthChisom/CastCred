// lib/farcaster.ts

import { FarcasterCastResponse } from "@/types";

const NEYNAR_API_KEY = process.env.NEXT_PUBLIC_NEYNAR_API_KEY || "";
const NEYNAR_API_URL = "https://api.neynar.com/v2/farcaster/cast";

export async function castToFarcaster(
  message: string
): Promise<FarcasterCastResponse> {
  try {
    const res = await fetch(NEYNAR_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: NEYNAR_API_KEY,
      },
      body: JSON.stringify({
        text: message,
        signer_uuid: process.env.NEXT_PUBLIC_NEYNAR_SIGNER_UUID,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data.message || "Farcaster post failed" };
    }

    return {
      success: true,
      cast: data.cast,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Unexpected error while posting to Farcaster",
    };
  }
}
