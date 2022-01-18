import React from 'react'
import './home.css';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import Chart from '../../components/Charts/Chart';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/wwidgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
