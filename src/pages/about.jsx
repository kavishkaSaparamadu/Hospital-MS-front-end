import React from 'react'
import img from '../Images/homepage.png'
import im from '../Images/vision.png'
const About = () => {
  return (
  
    
  
      <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Misson</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">provide quality healthcare solutions to patients at affordable prices by qualified medical practitioners and paramedical staff.</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <div>
          <div className= 'w-10 h-5 rounded-lg mr-4' style={{animationDuration: '3s' }}/>
          <img src={img} alt="header image" />
          </div>
        </div>
      </li>
    </ul>

    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <div>
          <div className= 'w-10 h-5 rounded-xl mr-4' style={{animationDuration: '3s' }}/>
          <img src={im} alt="vissionimage" />
          </div>
        </div>
      </li>
    </ul>
    <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-x-6 gap-y-20 px-12 lg:px-8 xl:grid-cols-1">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">to be the leading healthcare provider in our community, recognized for delivering exceptional patient care, pioneering medical advancements, and fostering a culture of compassion and excellence in everything we do. We aspire to be the trusted partner in promoting health and wellness, ensuring access to high-quality, affordable healthcare for all individuals, and making a meaningful difference in the lives of those we serve."
</p>
    </div>
  </div>
</div>
</div>
</div>
  
  )
}

export default About