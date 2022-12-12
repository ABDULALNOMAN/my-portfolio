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
                loader: ({ params }) => {
                    const data = fetch(`https://my-protfolio-server-eight.vercel.app/products/${params.id}`)
                    return data
                }
            }
        ])
    }
])
export default router