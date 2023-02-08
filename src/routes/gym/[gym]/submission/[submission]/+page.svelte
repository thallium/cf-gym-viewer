<script>
  import '@picocss/pico'
    /** @type {import('./../../$types').PageData} */
  export let data;
</script>

<svelte:head>
	<title>Submission #{data.submission}</title>
</svelte:head>

<h3>
Submission #{data.submission} for problem: {data.problem}
</h3>
<pre class="container">{@html data.code}</pre>


<style>
  h3 {
    margin-top: 1rem;
    text-align: center;
  }
  pre {
    color: #D8DEE9;
    padding: 1rem;
    background-color: #2E3440;
  }
</style>
