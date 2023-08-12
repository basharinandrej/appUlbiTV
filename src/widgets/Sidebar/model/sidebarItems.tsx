import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faAddressCard } from '@fortawesome/free-solid-svg-icons'

export const sidebarItems = [
    {
        path: '/',
        text: 'Home',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        path: '/about',
        text: 'About',
        icon: <FontAwesomeIcon icon={faAddressCard} />
    },
    {
        path: '/profile',
        text: 'Profile',
        icon: <FontAwesomeIcon icon={faUser} />
    }
]