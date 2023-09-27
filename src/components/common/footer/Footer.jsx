import React from 'react'
import Logo from '../../../assets/logo.png'
import { Item } from './Item'
import { CONTACTO, CATEGORIAS, LEGAL } from './Menu'
export const Footer = () => {
    return (
        <footer className='bg-black text-primary flex'>
            <div className='mx-10 grid grid-cols-1 md:grid-cols-4 gap-4 py-8'>
                <div className='flex h-[8vh] md:h-[10vh]'>
                    <img src={Logo} alt="" />
                </div>
                <Item Links={CONTACTO} title={'CONTACTO'} />
                <Item Links={CATEGORIAS} title={'CATEGORIAS'}/>
                <Item Links={LEGAL} title={'LEGAL'} />
            </div>
        </footer>
    )
}
