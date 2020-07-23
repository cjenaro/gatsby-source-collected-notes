<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Source Collected Notes Plugin
</h1>

A source plugin for Collected Notes API.

## 🚀 Install

```shell
npm i gatsby-source-collected-notes
```

## 🎓 Use

Include the plugin on the `gatsby.config.js`

```js
module.exports = {
  /* Your site config here */
  plugins: [
    /* ... */
    {
      resolve: `gatsby-source-collected-notes`,
      options: {
        notesOwner: 'jenaro' // URL will look something like https://collectednotes.com/jenaro.json
      }
    }
    /* ... */
  ],
}
```