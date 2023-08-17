import { useCart } from '../hooks/useCart.js'
import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className='footer'>
            {/* {
                JSON.stringify(filters, null, 2)
            } */}
            <h4>
                Prueba técnica de ReactJS ⚛️ - <span>@emaadev</span>
            </h4>
            <h5>Shopping Cart with useContext and useReducer</h5>
        </footer>
    )
}