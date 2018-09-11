<template>
    <div class="row">
        <input 
            :is="element"
            class="input"
            :class="inputClass"
            :name ="name"
            :type="type"
            :value.prop = "text"
            :placeholder="placeholder"
            @input="update"
            v-bind="$attrs"
        />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        type: {
            type: String,
            default: 'text',
        },
        text: {
            required: true,
        },
        placeholder: {
            type: String,
        },
        invalid: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        inputClass () {
            return {
                'invalid': this.invalid
            }
        },
        element () {
            return this.type === 'textarea' ? this.type : 'input'
        }
    },

    methods: {
        update(e) {
            // console.log(e.currentTarget.value)
            this.$emit('update', e.currentTarget.value)
        },
    },

    model : {
        prop: 'text',
        event: 'update',
    }

}
</script>

<style>

</style>
