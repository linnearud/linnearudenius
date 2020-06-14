/** @jsx jsx */
import { jsx } from "@emotion/core";

const StartPage = () => (
    <div css={{
        background: 'url("no_way_through.png") no-repeat center center fixed',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        height: '100vh',
        with: '100vw'

    }}>
        <div css={{
            position: 'absolute',
            bottom: 5,
            color: '#eabe53',
            fontFamily: 'Indie Flower, cursive',
            padding: '0 10px',
            backgroundColor: '#22291f',
        }}>
            Linnea Rudenius: 2020 : 
            <a css={{color: '#eabe53'}} href="/cdn-cgi/l/email-protection#e38f8a8d8d8682cd91a38b8c978e828a8fcd808c8e">email</a> : 
            <a css={{color: '#eabe53'}} href="https://www.linkedin.com/in/linnea-rudenius-b67a47152"> linkedIn </a>
        </div>
        <div css={{
            position: 'absolute',
            bottom: 5,
            right: 5,
            color: '#eabe53',
            fontFamily: 'Indie Flower, cursive',
            padding: '0 10px',
            backgroundColor: '#22291f',
        }}>
            <a href="/birds" css={{color: '#eabe53'}}>Birds</a>
        </div>
    </div>
)

export default StartPage