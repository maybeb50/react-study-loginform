import React from 'react';

function NotFound({ location }) {
    return(
        <>
            <p>이 페이지는 존재 하지 않습니다.</p>
            <span>{location.pathname}</span>
        </>
    )
}

export default NotFound;