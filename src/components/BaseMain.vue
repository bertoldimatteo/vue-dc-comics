<template>
    <main class="main">
        <div class="title">
            <div class="container">
                <h1>Content goes here</h1>
            </div>
        </div>
        <div class="main-footer">
            <div class="container-secondary shop">
                <a href="#"><img src="../assets/img/buy-comics-digital-comics.png" alt=""><span>DIGITAL COMICS</span></a>
                <a href="#"><img src="../assets/img/buy-comics-merchandise.png" alt=""><span>DC MERCHANDISE</span></a>
                <a href="#"><img src="../assets/img/buy-comics-subscriptions.png" alt=""><span>SUBSCRIPTION</span></a>
                <a href="#"><img src="../assets/img/buy-comics-shop-locator.png" alt=""><span>COMIC SHOP LOCATOR</span></a>
                <a href="#"><img class="svg" src="../assets/img/buy-dc-power-visa.svg" alt=""><span>DC POWER VISA</span></a>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'BaseMain', 
}
</script>

<style lang="scss" scoped>
.main {
    background-color: var(--second-color);
}
.title {
    color: var(--first-color);
    padding: 50px 0;
}
.main-footer {
    background-color: var(--third-color);
}
.shop { 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0;

    & img {
        height: 3.75rem;
        max-height: 3.75rem;
    };

    & .svg {
        height: 2.5rem;
    };

    & a {
        text-decoration: none;
        color: var(--first-color);
        display: flex;
        align-items: center;
    }

    & span {
        margin: 1.25rem;
    }
}
</style>