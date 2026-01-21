import {use} from 'react'
import PricingCard from '../PricingCard/PricingCard'

export default function PricingPlan({pricingPromise}) {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h1>Welcome To Our membership plan</h1>
      <div className='grid md:grid-cols-3 gap-6'>
        {pricingData.map(price => <PricingCard key={price.id} price={price}/>)}
      </div>
    </div>
  )
}
