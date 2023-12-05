const Posts = [
    {
        "id":"Rendering",
        "title":"Two forms of Rendering",
        "date":"2023-11-20",
        "Content":`We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

        You can use Static Generation for many types of pages, including:
        
        Marketing pages
        Blog posts
        E-commerce product listings
        Help and documentation`
    },
    {
        "id":"ssd-ssr",
        "title":"Two types of ssd and ssr",
        "date":"2023-11-20",
        "Content":`Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

        Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
        Server-side Rendering is the pre-rendering method that generates the HTML on each request.`
    }
]

export default Posts