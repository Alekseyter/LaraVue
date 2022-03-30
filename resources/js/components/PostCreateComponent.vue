<template>
    <div class="row row-cols-1 g-4 p-3">
        <div class="col">
           <h3 class="fw-bold text-center">Создать пост</h3>
       </div>
       <div class="col">
           <input type="text" class="form-control" v-model="title" placeholder="title">
       </div>
       <div class="col">
           <input type="text" class="form-control" v-model="content" placeholder="content">
       </div>
       <div class="col">
           <a href="#" @click.prevent="addPost" class="btn btn-warning">Создать</a>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'PostCreateComponent',

        data() {
            return {
                title: null,
                content: null
            }
        },

        methods: {
            addPost() {
                axios.post('/api', {title: this.title, content: this.content})
                .then(
                    res => {
                        this.title = null,
                        this.content = null,
                        this.$parent.$refs.posts.getPosts()
                    }
                )
            },

            isCreatePost() {
                console.log('this is create-post');
            }
        }

    }
</script>

<style scoped>

</style>
