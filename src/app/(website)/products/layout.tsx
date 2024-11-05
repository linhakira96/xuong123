import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <aside>Assads</aside>
            <main>{children}</main>
        </div>
    )
}

export default Layout