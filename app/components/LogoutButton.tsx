'use client';

import { useRouter } from "next/navigation";

import {resetAuthCookies} from '../lib/actions';

import MenuLink from "./navbar/MenuLink";

interface LogoutButtonProps {
    onLogout?: () => void; 
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
    onLogout
}) => {
    const router=useRouter();

    const submitLogout = async () => {


        if (onLogout) {
            onLogout();
        }

        resetAuthCookies();
        router.refresh();
        router.push('/');
    }

    return (
        <MenuLink
        label="Log out"
        onClick={submitLogout}
        />
    )

}

export default LogoutButton;