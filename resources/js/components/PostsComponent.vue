<template>
    <div>
       <div class="row row-cols-3 g-4 p-3">
           <div class="col" v-for="post in posts" v-bind:key="post.id">
               <div class="shadow rounded p-4 text-center" :class="isEdit(post.id) ? 'd-none' : ''">
                    <h3 class="fw-bold mb-3">{{ post.title }}</h3>
                    <h4 class="mb-3">{{ post.content }}</h4>
                    <a href="#" @click.prevent="changeEditPostId(post.id, post.title, post.content)" class="btn btn-success">Edit</a>
                    <a href="#" @click.prevent="deletePost(post.id)" class="btn btn-danger">Delete</a>
               </div>
               <div class="shadow rounded p-4 text-center" :class="isEdit(post.id) ? '' : 'd-none'">
                    <input type="text" class="form-control mb-3" v-model="title">
                    <input type="text" class="form-control mb-3" v-model="content">
                    <a href="#" @click.prevent="updatePost(post.id)" class="btn btn-success">Apply</a>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'PostsComponent',

        data() {
            return {
                posts: null,
                editPostId: null,
                title: null,
                content: null
            }
        },

        mounted() {
            this.getPosts()
        },

        methods: {
            getPosts() {
                axios.get('/api')
                .then(
                    res => {
                        this.posts = res.data
                    }
                )
            },

            changeEditPostId(id, title, content) {
                this.editPostId = id
                this.title = title
                this.content = content;
            },

            isEdit(id) {
                return this.editPostId === id;
            },

            updatePost(id) {
                this.editPostId = null
                axios.patch(`/api/${id}`, {title: this.title, content: this.content})
                .then(
                    res => {
                        this.getPosts()
                    }
                )
            },

            deletePost(id) {
                axios.delete(`/api/${id}`)
                .then(
                    res => {
                        this.getPosts()
                    }
                )
            },

            isPosts() {
                console.log('this is posts');
            }
        },
    }
</script>

<style scoped>

</style>
