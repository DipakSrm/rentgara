import React from 'react';
import Header from './Header';
import Footer from '@/components/Footer';

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
