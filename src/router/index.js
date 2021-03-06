import Vue from 'vue'
import Router from 'vue-router'
import MapComponent from "../components/Map"
import ShopRegistrationComponent from "../components/ShopRegistration";
import LandingShopsComponent from "../components/LandingShops";
import FaqComponent from "../components/Faq";
import HowToComponent from "../components/HowTo";
import WhoWeAreComponent from "../components/WhoWeAre";
import NotFoundComponent from "../components/NotFound";
import ManifestoComponent from "../components/Manifesto";
import HomeComponent from "../components/Home";
import PolicyComponent from "../components/Policy";
Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: {
                name: "home"
            }
        },
        {
            path: "/home",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/mappa",
            name: "map",
            component: MapComponent
        },
        {
            path: "/commercianti",
            name: "commercianti",
            component: LandingShopsComponent
        },
        {
            path: "/registrati",
            name: "register",
            component: ShopRegistrationComponent
        },
        {
            path: "/domande-frequenti",
            name: "faq",
            component: FaqComponent
        },
        {
            path: "/howto",
            name: "howto",
            component: HowToComponent
        },
        {
            path: "/chi-siamo",
            name: "chi-siamo",
            component: WhoWeAreComponent
        },
        {
            path: "/manifesto",
            name: "manifesto",
            component: ManifestoComponent
        },
        {
            path: "/policy",
            name: "policy",
            component: PolicyComponent
        },
        {path: '*', component: NotFoundComponent, meta: {layout: 'none'}}
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})
