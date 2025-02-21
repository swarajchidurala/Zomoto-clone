import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemDisplay'
import Chains from '../components/chains'
import FirmCollections from '../components/FirmCollection'



const LandingPage = () => {
  console.log('Rendering LandingPage component');
  return (
    <div>
        <TopBar />

        <div className="landingSection">
        {console.log('Rendering landingSection')}
        <ItemsDisplay />
        {console.log('Rendered ItemsDisplay')}
        <Chains />
        {console.log('Rendered Chains')}
        <FirmCollections />
        {console.log('Rendered FirmCollections')}
        </div>

    </div>
  )
}

export default LandingPage
