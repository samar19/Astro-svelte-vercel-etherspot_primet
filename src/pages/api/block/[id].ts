import { productMap } from '../../../models/db';
import type { APIContext } from 'astro';
import dotenv from 'dotenv';
dotenv.config();
export function GET({ params }: APIContext) {
	console.log(process.env.WALLET_PRIVATE_KEY)
	const id = Number(params.id);
	if (productMap.has(id)) {
		const product = productMap.get(id);

		return new Response(JSON.stringify(product));
	} else {
		return new Response(null, {
			status: 400,
			statusText: 'Not found',
		});
	}
}
