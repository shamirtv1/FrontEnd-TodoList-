"use client";
import React, { FC, PropsWithChildren, useEffect, useLayoutEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import { thereIsToken } from '@/helpers';
import { redirect } from 'next/navigation';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {


    useEffect(() => {   
        if (!thereIsToken()) return redirect("/auth/signin");
    }, []);
    

    return (
        <>
            <HeaderComponent />
            {children}
        </>
    )
}

export default DashboardLayout;