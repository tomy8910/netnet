import React from 'react'
import Link from 'gatsby-link'

export default () =>
  <div>
    Hi You are at About Page.
    <Link to="/">Home</Link>
    <form name="contact" netlify>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="email" placeholder="email" />
      <button type="submit">Submit </button>
    </form>
  </div>
