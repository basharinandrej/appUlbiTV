import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faAddressCard, faFileText } from '@fortawesome/free-solid-svg-icons'
import {SidebarItem} from "../model/types/types";

export const sidebarItems: Array<SidebarItem> = [
    {
        path: '/',
        text: 'Home',
        icon: <FontAwesomeIcon icon={faHome} />,
        onlyAuth: false
    },
    {
        path: '/about',
        text: 'About',
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        onlyAuth: false
    },
    {
        path: '/profile/',
        text: 'Profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        onlyAuth: true
    },
    {
        path: '/articles',
        text: 'Articles',
        icon: <FontAwesomeIcon icon={faFileText} />,
        onlyAuth: true
    }
]