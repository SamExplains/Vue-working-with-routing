<template>
    <div class="Header">
        <ul class="nav nav-tabs nav-stacked">
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/user">User</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>
