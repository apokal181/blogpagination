import React from 'react'
import {MasonryPost} from './'



export default function PostMasonry ({posts}) {

    return (
        <section className="masonry" >
            { posts.map(() =>
                <MasonryPost />
            )}
        </section>
    )
}

