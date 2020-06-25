<template>
    <div class="row">
    
        <div>
    
            <h1>Create post</h1>
            <form @submit.prevent="addArticle(post)">
                <div class="form-group has-error">
                    <label for="name">Title<span class="require">*</span></label>
                    <input id="name" type="text" class="form-control" name="name" v-model="post.title" />
    
                </div>
    
                <div class="form-group">
                    <label for="year">Year <span class="require">*</span></label>
                    <input id="year" type="text" class="form-control" name="year" v-model="post.year" />
                </div>
                <div class="form-group">
                    <label for="URL">URL Reference <span class="require">*</span></label>
                    <input id="url" type="text" class="form-control" name="url" v-model="post.url" />
                </div>
                <div class="form-group">
                    <label for="desc">Description <span class="require">*</span></label>
                    <textarea id="desc" type="text" class="form-control" name="desc" rows="3" v-model="post.desc"></textarea>
                </div>
                <div class="form-group">
                    <label for="type">Type <span class="require">*</span></label>
                     <v-select
            :items="items"
            label="Standard"
            v-model="post.type"
          ></v-select>
                   
                </div>
            
   
    
                <div class="form-group" style="margin-top:100px;">
                    <p><span class="require">*</span> - required fields</p>
                </div>
                
    
                    <button type="submit" class="btn btn-primary" value="addPost">Create</button>
    
            </form>
        </div>
        <div class="col-md-8 col-md-offset-2"></div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    data() {
        return {
            post: {
                title: '',
                year: '',
                url: '',
                desc: '',
                type: '',
                key: ''
            },
              items: [
          'Magazine',
          'Workshop',
          'Book',
          'Inbook',
        ],
        }
    },
    methods: {
        ...mapActions("posts", ["addArticle"]),


    }
}
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
.v-select .dropdown-menu {
  display:grid;
}
</style>

