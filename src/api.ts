export interface Address {
	address: string;
}

export async function getAbstractAddress(): Promise<Address> {
	const response = await fetch(`${location.origin}/api/address`, {
		credentials: 'same-origin',
		method: 'GET',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
			Cache: 'no-cache',
		},
	});
	const address: Address = await response.json();
	return address;
}
