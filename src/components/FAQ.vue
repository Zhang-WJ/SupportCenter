<template>
    <main class="faq">
        <h1>Frenquently Asked Questions</h1>
        <div class="error" v-if="hasRemoteErrors">
            Can not load the questions
        </div>
        
        <Loading v-if="remoteDataBusy" />

        <section class="list">
            <article v-for="question of questionList" :key="question.title">
                <h2 v-html="question.title"></h2>
                <p v-html="question.content"></p>
            </article>
        </section>
    </main>
</template>

<script>
import RemoteData from '../mixins/RemoteData'

export default {
    mixins: [
        RemoteData({
            questionList: 'questions'
        }),
    ],


    // async created () {
    //     this.loading = true
    //     try {
    //         this.questions = await this.$fetch('questions')
    //     } catch (e) {
    //         this.error = e
    //     }
    //     this.loading = false
    // },
    
}
</script>
