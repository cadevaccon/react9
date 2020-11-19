import React from 'react'

function profile(props) {
    return (
        <div>
            {props.user.id}<br/>
            {props.user.username}<br/>
            {props.user.email}<br/>
            {props.user.phone}<br/>
            <h2> {props.user.Website}
            </h2>

        </div>
    )
}

export default profile
