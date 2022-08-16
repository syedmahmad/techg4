import React, { Fragment } from 'react'
import Head from 'next/head'

const HeadContent = ({ description,
    title,
    route,
    image_url,
    keywords
}) => {
    return (

        <Head>
            <title>{title}</title>
            <meta name="title" property="og:title" content={title} />
            <meta
                name="description"
                property="og:description"
                content={description}
            />
            <meta name="keywords" content={keywords ? keywords : ""} />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width,minimum-scale=1, initial-scale=1, maximum-scale=1, user-scalable=no"
            />

            <link rel="canonical" />
            <meta name="type" property="og:type" content="website" />
            <meta name="title" property="og:title" content={title} />
            <meta name="url" property="og:url" />
            <meta name="image" property="og:image" content={image_url} />
            <meta
                name="description"
                property="og:description"
                content={description}
            />
            <meta property="fb:app_id" content="1757891891170883" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image_url} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


        </Head>

    )
}

export default HeadContent
