import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Spin } from 'antd';
import { auth } from '../firebase/config';

export const AuthContext = React.createContext();

const AuthProvider = ({ children}) => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            console.log({ user });
            if (user) {
                const { displayName, email, uid, photoURL } = user.multiFactor.user;
                setUser({ displayName, email, uid, photoURL });
                setIsLoading(false);
                history.push('/');
            } else {
                history.push('/login');
            }
        })

        return () => {
            unsubcribed();
        }
    }, [history]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
