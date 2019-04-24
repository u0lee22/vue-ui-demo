import DashboardLayout from "@/views/Layout/DashboardLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import UserProfile from "@/views/UserProfile.vue";

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "user",
                name: "User Profile",
                component: UserProfile
            }
        ]
    }
];


export default routes;
