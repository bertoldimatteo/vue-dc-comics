<template>
    <header class="header container">
        <div class="header__logo">
            <img src="../assets/img/dc-logo.png" alt=""/>
        </div>
        <nav class="header__nav">
            <ul>
                <li><a href="#">CHARACTERS</a></li>
                <li><a href="#">COMICS</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">GAMES</a></li>
                <li><a href="#">COLLECTIBLES</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">FANS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">SHOP</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'BaseHeader',
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    &__nav ul {
        display: flex;
        list-style-type: none;
    };

    & img {
        width: 80%;
    };

    & a {
        text-decoration: none;
        margin: 0 .625rem;
        font-size: .875rem;
        font-weight: 600;
        color: var(--fourth-color);
        padding-bottom: 3.6875rem;
    };

    & a:hover {
        color: var(--third-color);
        border-bottom: 4px solid var(--third-color);
    }
}
</style>