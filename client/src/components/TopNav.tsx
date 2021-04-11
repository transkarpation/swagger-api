import React from 'react'
import {Link} from 'react-router-dom'

export default function TopNav() {
    return (
        <div className="top-nav row-3">
            <div className="brand">
                Brand
            </div>
            <div className="site-menu f-center">
                site menu
            </div>
            <div className="auth f-right">
                <Link to="/signin">Signin</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}
