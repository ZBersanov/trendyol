import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { SideBar } from '../Sidebar'

export default function MobileSidebar() {
	return (
		<Sheet>
			<SheetTrigger className='lg:hidden pr-4 hover:opacity-75 text-white'>
				<Menu />
			</SheetTrigger>
			<SheetContent side={'left'} className='p-0 text-white'>
				<SideBar />
			</SheetContent>
		</Sheet>
	)
}
