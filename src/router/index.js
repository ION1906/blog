import Main from '../components/Main.vue'
import Two from '../components/BlogPost.vue'

export const routes = [
        {
            path: '',
            name: 'Main',
            component: Main
        },
        {
            path: '/post/:id/',
            name: 'BlogPost',
            component: Two
        }
]