import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header>header</header>
            <aside>Assads</aside>
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    )
}

export default Layout