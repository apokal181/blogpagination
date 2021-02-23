import React from 'react'

export default function MasonryPost ({post, tagsOnTop}) {

    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Post</span>
                        <p>Itaque earum rerum hic tenetur a sapiente delectus, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut...</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Read</a>
                    </div>
                </div>
            </div>
        </div>

    )
}