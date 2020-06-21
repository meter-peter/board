<template id="product-list">
    <div>
    
        <div class="actions">
    
            <a class="btn btn-default">
    
                <router-link :to="{path: '/add-product'}">
    
                    <span class="glyphicon glyphicon-plus"></span> Add product
    
                </router-link>
    
            </a>
    
        </div>
    
        <div class="filters row">
    
            <div class="form-group col-sm-3">
    
                <label for="search-element">Name</label>
    
                <input v-model="searchKey" class="form-control" id="search-element" requred/>
    
            </div>
    
        </div>
    
        <table class="table">
    
            <thead>
    
                <tr>
    
                    <th>Name</th>
    
                    <th>Description</th>
    
                    <th>Author</th>
    
                    <th class="col-sm-2">Actions</th>
    
                </tr>
    
            </thead>
    
            <tbody>
    
                <tr v-for="post in filteredPosts" :key="post.id">
    
                    <!-- tr v-for="product in products" -->
    
                    <!-- tr v-for="product in products | filterBy searchKey in 'name'" -->
    
                    <td>
    
                        <a>
    
                            <router-link :to="{name: 'product', params: {product_id: product.id}}">{{ product.name }}</router-link>
    
                        </a>
    
                    </td>
    
                    <td>{{ post.description }}</td>
    
                    <td>
    
                        {{ post.author }}
    
                        <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
    
                    </td>
    
                    <td>
    
                        <a class="btn btn-warning btn-xs">
    
                            <router-link :to="{name: 'product-edit', params: {product_id: product.id}}">Edit</router-link>
    
                        </a>
    
                        <a class="btn btn-danger btn-xs">
    
                            <router-link :to="{name: 'product-delete', params: {product_id: product.id}}">Delete</router-link>
    
                        </a>
    
                    </td>
    
                </tr>
    
            </tbody>
    
        </table>
    
    </div>
</template>





<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('posts', ['posts'])
    },
    created() {
        this.$store.dispatch('posts/loadposts')
    }

}
</script>

<style>

</style>