import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home/Home'
import Main from '../Layout/Main'
import Products from '../Other/Products'



const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/products/:id',
                element: <Products></Products>,
                loader: async({ params }) => {
                    const res = await fetch(`http://localhost:5000/products/${params?.id}`)
                    return await res.json()
                }
            }
        ])
    }
])
export default router

// https://my-protfolio-server-eight.vercel.app