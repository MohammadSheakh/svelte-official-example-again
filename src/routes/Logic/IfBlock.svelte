<script>
  let user = {
    loggedIn : false,
  }

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

{#if user.loggedIn}
  <h1>welcome to our system ! </h1>
  <button on:click={toggle} class="border border-2 border-blue-300 p-1 rounded-lg">
    Log Out
  </button>  
{/if}

{#if !user.loggedIn}
  <h1>Want to log in ! ... </h1>
  <button on:click={toggle} class="border border-2 border-blue-300 p-1 rounded-lg">
    Log In
  </button>  
{/if}