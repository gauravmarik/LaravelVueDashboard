import Dashboard from "./components/Dashboard.vue";
import ListOrders from "./pages/orders/ListOrders.vue";
import ListUsers from "./pages/users/ListUsers.vue";
import UpdateSetting from "./pages/settings/UpdateSetting.vue";
import UpdateProfile from "./pages/profile/UpdateProfile.vue";

export default [
    {
        path: "/admin/dashboard",
        name: "admin.dashboard",
        component: Dashboard,
    },
    {
        path: "/admin/orders",
        name: "admin.orders",
        component: ListOrders,
    },
    {
        path: "/admin/users",
        name: "admin.users",
        component: ListUsers,
    },
    {
        path: "/admin/settings",
        name: "admin.settings",
        component: UpdateSetting,
    },
    {
        path: "/admin/profile",
        name: "admin.profile",
        component: UpdateProfile,
    },
];
