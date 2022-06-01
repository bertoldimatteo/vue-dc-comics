<template>
    <footer>
        <div class="container">
            <div class="footer__list">
                <div class="first__ul">
                    <ul>
                        <h3>DC COMICS</h3>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                    </ul>
                    <ul>
                        <h3>SHOP</h3>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>
                <div class="second__ul">
                      <ul>
                        <h3>DC</h3>
                        <li><a href="#">Term Of Use</a></li>
                        <li><a href="#">Privacy policy(New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="third__ul">
                       <ul>
                            <h3>SITES</h3>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__image__logo">

            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'BaseFooter',
}
</script>

<style lang="scss" scoped>
footer {
    background-image: url('../assets/img/footer-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 370px;
};
.container {
    padding: 50px 0;

    & h3 {
        color: var(--first-color);
        margin-bottom: .9375rem;
    }

    & div {
        display: flex;
        margin-right: 1.875rem;
    }

    & ul {
        list-style-type: none;
        margin-bottom: .625rem;
    }

    & li {
        padding: .125rem 0;
        font-size: .875rem;
    }

    & a {
        color: var(--fifth-color);
        margin-bottom: .9375rem;
        text-decoration: none;
    }

    & .first__ul {
    flex-direction: column;
}
}

</style>