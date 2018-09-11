<template>
    <main class="tickets-layout">
        <h1>Your Support tickets</h1>
        <!-- TODO -->
        <div class="actions">
            <router-link 
                v-if="$route.name !== 'tickets'"
                tag="button"
                class="secondary"
                :to="{name: 'tickets'}">
                See all tickets
            </router-link>
            <router-link
                v-if="$route.name !== 'new-ticket'"
                tag="button"
                :to="{name: 'new-ticket'}">
                New ticket
            </router-link>
        </div>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>
