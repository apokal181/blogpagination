import React from 'react'
import {PostMasonry} from '../components/common/index'
import trending from '../assets/mocks/trending'

export default function Home () {
    return (
        <section className="container home">
            <div className="trending" style={{textAlign:"center"}}>Trending Posts</div>
        <div className="row">

            <PostMasonry posts={trending}/>
        </div>
    </section>
    )
}