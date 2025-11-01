<script setup lang="ts">
//
</script>

<template>

    <section class="hero is-primary is-medium">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">
                    Welcome to my Portofolio!
                </h1>
                <h2 class="subtitle is-3">
                    I'm Ivan Kurniawan S, a Backend Developer from Indonesia.
                </h2>
                <p class="is-size-5">
                    Specialized in building robust and scalable backend systems using python FastAPI framework, PostgreSQL databases, and deploying applications.
                </p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h3 class="title is-3">
                About Me
            </h3>
            <div class="content">
                <p>
                    Hello! I'm Ivan Kurniawan S, a passionate Backend Developer from Indonesia with
                    a strong focus on building robust and scalable backend systems. I specialize in 
                    using the FastAPI framework for Python, which allows me to create high-performance 
                    APIs quickly and efficiently. My expertise also extends to working with PostgreSQL 
                    databases, ensuring data integrity and optimal performance for applications. Additionally, 
                    I have experience in deploying applications, making sure they run smoothly in production environments. 
                    I'm dedicated to continuous learning and staying updated with the latest technologies in backend development.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>

.hero + .section {
    margin-top: 2rem;
}

.hero .title{
    font-weight: 700;
}
</style>