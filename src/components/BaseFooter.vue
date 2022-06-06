<template>
    <footer>
        <div class="footer-top">
            <div class="title">
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
        </div>
        <div class="footer-middle">
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
                    <img src="../assets/img/dc-logo-bg.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="sign-up-container">
                    <button class="btn" type="button">SIGN-UP NOW!</button>
                </div>
                <div class="follow-us-container">
                    <h2>FOLLOW US</h2>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest-p" /></a>
                    <a href="#"><font-awesome-icon icon="fa-brands fa-periscope" /></a>
                </div>
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
.footer-middle {
    background-image: url('../assets/img/footer-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 370px;
};
.footer-bottom {
    background-color: var(--fourth-color);
    padding: 33px 0;
}
.footer__list {
    padding: 50px 0;
};
.footer__image__logo {
    display: flex;
    justify-content: center;
}
.footer__image__logo img {
    object-fit: none;
    object-position: 0 -6.25rem;
    width: 37.5rem;
    height: 23.125rem;
    max-width: 600px;
    max-height: 23.125rem;
}
.footer-middle a {
    margin-bottom: .9375rem;
    color: var(--fifth-color);
    text-decoration: none;
}
.btn {
    background-color: transparent;
    color: var(--first-color);
    border: 2px solid var(--third-color);
    padding: 15px 20px;
}
.follow-us-container {
    align-items: center;

    & h2 {
        color: var(--third-color);
        margin: 0 20px;
    }

    & a {
        margin: 0 .625rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: var(--fifth-color);
        text-align: center;
        line-height: 2.5rem;
        color: var(--fourth-color);
    }
}
.container {
    display: flex;
    justify-content: space-between;

    & img {
        overflow: hidden;
    }

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

    & .first__ul {
    flex-direction: column;
}
}
.footer-top {
    background-color: var(--second-color);
}
.main-footer {
    background-color: var(--third-color);
}
.footer-top-footer {
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