import React from 'react'
import './widgetSm.css'
import { Visibility } from '@mui/icons-material'
const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='widgetimage' className='widgetSmImg' />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Omirinde Boluwatife</span>
                        <span className='widgetSmTitle'>UI/UX Designer</span>
                    </div>
                    <button className='widgteSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
