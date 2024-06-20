<!-- <script>
   import { onMount } from 'svelte';

  let promise = getRandomNumber();

  async function getRandomNumber(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://csrng.net/csrng/csrng.php?min=1&max=5';

    const res = await fetch(proxyUrl + targetUrl);
    // return res.json();
    const text = await res.text();
console.log(res)
		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
  }

  function handleClick() {
		promise =  getRandomNumber();
	}
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">Keyed Each Blocks</h1>
  <div class="ml-[10%]">

    <button on:click={handleClick}> Remove first thing </button>

    {#await promise}
      <p>Waiting for promise to resolve...</p>
    {:then number}
      <p>{number}</p>
    {:catch error}
      <p style="color:red">{error.message}</p>
    {/await}

  </div>

  
</div> -->