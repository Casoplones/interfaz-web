<script>
  export let selectedImage = null
  let image1 = "./paisaje1.jpg"
  let image2 = "./paisaje2.jpg"
  let image3 = "./paisaje3.jpg"
  export let images = [image1, image2, image3]
  function closeModal(){
    selectedImage = null;
  }
</script>
  {#if selectedImage}
    <div class="modal">
      <img src={selectedImage} alt="paisaje" on:click={closeModal}/>
    </div>
  {/if}
  
  {#each images as image}
    <img src={image} alt="paisaje" on:click={() => selectedImage = image}/>
  {/each}

<style>
  img{
    width: 35%;
    margin: 1rem;
  }
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>