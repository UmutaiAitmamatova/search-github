import React from 'react';
import classes from './Footer.module.scss';
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
        <div className={classes.container}>
            <div className={classes.block}>
                <div><BsGithub size={32} /></div>
                <p>© 2023 GitHub, Inc.</p>
                <nav>
                    <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" className={classes.links}>Terms</a>
                    <a href="https://docs.github.com/ru/site-policy/privacy-policies/github-privacy-statement" className={classes.links}>Privacy</a>
                    <a href="https://github.com/security" className={classes.links}>Security</a>
                    <a href="https://www.githubstatus.com/" className={classes.links}>Status</a>
                    <a href="https://docs.github.com/ru" className={classes.links}>Docs</a>
                    <a href="https://support.github.com/?tags=dotcom-footer" className={classes.links}>Contact GitHub</a>
                    <a href="https://github.com/pricing" className={classes.links}>Pricing</a>
                    <a href="https://docs.github.com/ru" className={classes.links}>API</a>
                    <a href="https://github.com/services/" className={classes.links}>Training</a>
                    <a href="https://github.blog/" className={classes.links}>Blog</a>
                    <a href="https://github.com/about" className={classes.links}>About</a>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer