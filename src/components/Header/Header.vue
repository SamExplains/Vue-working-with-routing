<template>
    <div class="Header">
        <ul class="nav nav-tabs nav-stacked">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
<!--            <router-link to="/user/doe" tag="li" active-class="active" exact><a>User</a></router-link>-->
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
