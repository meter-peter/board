<template>
  <div class="container">
    <h1 class="page-header">Edit currentpost</h1>
    <form>
        <div class="well">
            <h2>{{post.title}}</h2><a>{{post.type}}</a>
            <h3>{{post.authors}}</h3>
            <p>{{post.desc}}</p>
            <a href="post.url">{{post.url}}</a>
        
            
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  </template>

<script>
export default {
    props:['post'],
    data: function () {
  return {
  }
}

}
</script>

<style>

</style>