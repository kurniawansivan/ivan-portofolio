<script setup lang="ts">
import { ref, computed } from 'vue';

const name = ref < string > ('');
const email = ref < string > ('');
const message = ref < string > ('');
const isSubmitted = ref < boolean > (false);

const isFormValid = computed(() => {
    return name.value.trim() !== '' && email.value.trim() !== '' && message.value.trim() !== '';
});
const isButtonDisabled = computed(() => !isFormValid.value);

function handleSubmit() {
    if (isFormValid.value) {
        isSubmitted.value = true;
        name.value = '';
        email.value = '';
        message.value = '';
    }
}
</script>

<template>
    <div>
        <h1 class="title">Contact Me</h1>
        <p class="subtitle">Have a question or want to work together?</p>

        <div v-if="isSubmitted" class="notification is-success">
            <p class="title is-4">Thank You!</p>
            <p>Your message has been sent. I'll get back to you soon.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit">

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input v-model="name" class="input" type="text" placeholder="Your Name">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input v-model="email" class="input" type="email" placeholder="mail@example.com">
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea v-model="message" class="textarea" placeholder="Your message here..."></textarea>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button type="submit" class="button is-primary" :disabled="isButtonDisabled">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
.textarea {
    min-height: 150px;
    resize: vertical;
}
</style>