<script>
  let user = {
    loggedIn : false,
  }

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">IF Else Block</h1>
  <div class="ml-[10%]">
{#if user.loggedIn}
  <h1>welcome to our system ! </h1>
  <button on:click={toggle} class="customBtn">
    Log Out
  </button>  

<!-- {:else if ---}   -->
{:else}

  <h1>Want to log in ! ... </h1>
  <button on:click={toggle} class="customBtn">
    Log In
  </button>  
{/if}

</div>
</div>