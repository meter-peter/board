<template>
    <div class="row">
    
        <div class="col-md-8 col-md-offset-2">
    
            <h1>Create post</h1>
    
            <form>
                  <div class="form-group has-error">
                    <label for="name">Title<span class="require">*</span> <small>(This field use in url path.)</small></label>
                    <input 
                    id="name"
                    type="text" 
                    class="form-control" 
                    name="name"
                    v-model="name" />
                    <span class="help-block">Field not entered!</span>
                </div>
    
                <div class="form-group">
                    <label for="year">Year <span class="require">*</span></label>
                    <input 
                    id="year"
                    type="text" 
                    class="form-control"
                    name="year"
                    v-model="year" />
                </div>
                <div class="form-group">
                    <label for="URL">URL Reference <span class="require">*</span></label>
                    <input 
                    id="year"
                    type="text" 
                    class="form-control"
                    name="year"
                    v-model="year" />
                </div>

    
                <div class="form-group">
                    <p><span class="require">*</span> - required fields</p>
                </div>
    
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" value="create">Create</button>
                    <button class="btn btn-default">Cancel</button>
                </div>
    
            </form>
        </div>
          <div class="col-md-8 col-md-offset-2"></div>
        </div>
</template>