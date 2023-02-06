<script>
    /** @type {import('./../../$types').PageData} */
  export let data;
</script>


<h2>
{data.gym}
</h2>
<div>
<pre>{@html data.code}</pre>
</div>


<style>
h2 {
  text-align: center;
}
div {
  display: flex;
  justify-content: center;
}
  pre {
    color: #D8DEE9;
    padding: 1rem;
    background-color: #2E3440 !important;
  }
</style>
