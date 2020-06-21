<template id="product-delete">
  <div>
  <h2>Delete product {{ product.name }}</h2>
  <form v-on:submit="deleteProduct">
    <p>The action cannot be undone.</p>
    <button type="submit" class="btn btn-danger">Delete</button>
    <a class="btn btn-default"><router-link to="/">Cancel</router-link></a>
  </form>
  </div>
</template>