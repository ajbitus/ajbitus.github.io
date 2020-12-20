import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center py-3 mt-5">
      <div className="footer-text m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. Made with&nbsp;
        <a
          href="https://github.com/surudhb/gatsby-personal-site-template"
          target="__blank"
          className="code-branch nounderline"
        >
          <FontAwesomeIcon icon={["fa", `code-branch`]} />
        </a>{" "}
        &&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a>, hosted on{" "}
        <a
          href="https://pages.github.com/"
          target="__blank"
          className="code-branch nounderline"
        >
          <FontAwesomeIcon icon={["fab", `github`]} />
        </a>
      </div>
      <div className="footer-social d-md-inline-flex social-icons-container">
        <a
          href="https://www.linkedin.com/in/ajbitus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="social-icons linkedin"
            title="LinkedIn"
          />
        </a>
        <a
          href="https://twitter.com/ajbitus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className="social-icons twitter"
            title="Twitter"
          />
        </a>
        <a
          href="https://www.facebook.com/ajbitus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="social-icons facebook"
            title="Facebook"
          />
        </a>
        <a
          href="https://www.github.com/ajbitus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className="social-icons github"
            title="Github"
          />
        </a>
        <a
          href="https://www.instagram.com/ajbitus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="social-icons instagram"
            title="Instagram"
          />
        </a>
        <a
          href="mailto:ajaykpradhan61@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            className="social-icons mail"
            title="e-mail"
          />
        </a>
      </div>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
