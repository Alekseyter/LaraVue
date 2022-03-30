import Vue from 'vue'
import IndexComponent from './components/IndexComponent'
import PostsComponent from './components/PostsComponent'
import PostCreateComponent from './components/PostCreateComponent'

require('./bootstrap')

const app = new Vue ({
    el: '#app',

    components: {
        IndexComponent,
        PostsComponent,
        PostCreateComponent
    }
})
