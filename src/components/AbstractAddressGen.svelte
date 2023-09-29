<script>
  import { getAbstractAddress } from '../api';
  export let address = '';
  const WAIT = 'generating ...';

	async function genAA() {
    address = WAIT;
		const aa = await getAbstractAddress();
    address = aa.address
		notifyCartItem(address);
	}
</script>

<button disabled={address === WAIT} on:click={genAA}>
	<span class="pretext">new abstract address</span>
</button> { ' '+ address }
