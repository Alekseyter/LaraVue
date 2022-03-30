<template>
    <div class="row p-3">
        <div class="col-8">
            <div class="border">
                <PostsComponent ref="posts"></PostsComponent>
            </div>
        </div>
        <div class="col-4">
            <div class="border">
                <PostCreateComponent></PostCreateComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import  PostsComponent from './PostsComponent.vue'
    import PostCreateComponent from './PostCreateComponent.vue'

    export default {
        name: 'IndexComponent',

        data() {
            return {

            }
        },

        mounted() {

        },

        methods: {

        },

        components: {
            PostsComponent,
            PostCreateComponent
        }
    }
</script>

<style scoped>

</style>
