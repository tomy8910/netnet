import React from 'react'
import Link from 'gatsby-link'

export default () =>
  <div>
    Hi This is the home page.
    <Link to="/about/" style={{ display: block }}>
      About Page
    </Link>
  </div>
