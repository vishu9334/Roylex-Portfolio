import { createBrowserRouter } from "react-router"
import RootLayout from "../layouts/RootLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Project from "../pages/Project"
import Experience from "../pages/Experience"
import Contact from "../pages/Contact"

export const route = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>, //app
        children:[
            {path: '/', element:<Home/>}, // root
            {path: '/about', element: <About/>},
            {path: '/skill', element: <Skills/>},
            {path: '/project', element: <Project/>},
            {path: '/experience', element: <Experience/>},
            {path: '/contact', element: <Contact/>}
        ]
    },
])
