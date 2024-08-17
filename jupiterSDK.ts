// Import necessary functions and types from the Jupiter API library
import { QuoteResponse, SwapRequest, SwapResponse, createJupiterApiClient, ResponseError } from '@jup-ag/api';
// Import the PublicKey class from Solana's web3 library
import { PublicKey } from '@solana/web3.js';
// Import the configuration object from our local config file
import { config } from './config';
// Import the logger object from our local logger file
import { logger } from './logger';

// Create a new Jupiter API client using the provided function
const jupiterApi = createJupiterApiClient();

/**
 * Get a quote for a token swap
 * @param inputMint The address of the token we're swapping from
 * @param outputMint The address of the token we're swapping to
 * @param amount The amount of input token we want to swap
 * @param slippageBps The allowed slippage in basis points (1 bps = 0.01%)
 * @returns A promise that resolves to a QuoteResponse from Jupiter API
 */
export async function getQuote(inputMint: string, outputMint: string, amount: number, slippageBps: number): Promise<QuoteResponse> {
    try {
        // Call the Jupiter API to get a quote for the swap
        const quote = await jupiterApi.quoteGet({
            inputMint,  // The token we're swapping from
            outputMint,  // The token we're swapping to
            amount,  // The amount we want to swap
            slippageBps,  // The allowed slippage
            onlyDirectRoutes: false,  // Allow indirect routes for potentially better rates
        });
        // Log the successful quote
        logger.info(`💹 Quote received: ${quote.outAmount} ${outputMint} for ${amount} ${inputMint}`);
        // Return the quote response
        return quote;
    } catch (error) {

....

To buy and Demo, contact me at [@zen_devs](https://t.me/zen_devs).
