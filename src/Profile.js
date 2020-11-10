import React from 'react';

function Profile( { user }) {
    const { email, password, name } = user || {}
    
    return(
        <>
            <h2>Profile</h2>
            <dl>
                <dt>E-mail</dt>
                <dd>{ email }</dd>
                <dt>Password</dt>
                <dd>{ password }</dd>
                <dt>Name</dt>
                <dd>{ name }</dd>
            </dl>
        </>
    )
}

export default Profile;