<template>
    <div class="tickets">
        <Loading v-if="remoteDataBusy" />
        <div class="empty" v-else-if="tickets.length === 0">
            You do not have any ticket yet.
        </div>
        <section class="tickets-list" v-else>
            <div v-for="ticket of tickets" class="ticket-item" :key='ticket.title'>
                <router-link :to="{ name: 'ticket', params: { id: ticket._id }}">{{ ticket.title }}</router-link>
                <!-- <a @click="id = ticket._id">{{ ticket.title }}</a> -->
                <span class="badge">{{ ticket.status }}</span>
                <span class="date">{{ ticket.date | date }}</span>
                
            </div>
        </section>
        <!-- <Ticket v-if="{id}" :id='{id}' /> -->
    </div>
</template>

<script>
import RemoteData from '../mixins/RemoteData.js'
// import Ticket from './Ticket';
export default {
    mixins: [
        RemoteData({
            tickets: 'tickets'
        })
    ],
    // data () {
    //     return {
    //         id: null,
    //     }
    // },

    // components: {
    //     Ticket,
    // }
}
</script>

<style>

</style>
