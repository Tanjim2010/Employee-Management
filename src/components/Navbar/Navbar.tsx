import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href={'/'}><img className='w-12' src={'https://i.ibb.co.com/8458Tyn7/Screenshot-2025-08-06-194256-removebg-preview.png'} /></Link>
            </div>
            <div className="flex-none">
                <ul className="space-x-2">
                    <Button><li><Link href={'/'}>Home</Link></li></Button>
                    <Button><li><Link href={'/addEmployee'}>Add Employee</Link></li></Button>
                    <Button><li><Link href={'/showEmployee'}>Show Employee</Link></li></Button>
                </ul>
            </div>
        </div>
    )
}
