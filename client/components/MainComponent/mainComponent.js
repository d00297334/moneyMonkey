import ExpenseView from '../ExpenseView/ExpenseView.js'
import AboutView from '../AboutView/AboutView.js'
import template from './template.js'
import StatsView from '../StatsView/StatsView.js'
import store from '../../store/store.js'


const routes = [
    { path: '/about', component: AboutView},
    { path: '/dash', component: ExpenseView},
    { path:'/', component: ExpenseView },
    { path:'/stats', component: StatsView}
    
]

const router = new VueRouter({
    routes
})

const main = new Vue({
    el: '#app',
    router,
    store,
    template,
    /*created() {
        api.getExpenses()
			.then(expenses => {
				this.expenses = expenses
				this.loading = false
			})
			.catch(e => console.log(e))
    },*/
    data: {
        theme: 'dark',
        message: 'Welcome!',
        expenses: [],

    },
    methods: {
        setTheme(theme) {
			this.theme = theme
        },
        
    },
    computed: {
        dark() {
			return this.theme === 'dark'
		},
    }

})

export default main
