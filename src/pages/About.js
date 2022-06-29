import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-5xl ml-5 mt-20 text-center'>Frequently Asked Questions</h1>
      <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-20">
        <div class="collapse-title text-xl font-medium">
          Question 1
        </div>
        <div class="collapse-content"> 
          <p>input answer in this box</p>
        </div>
      </div>
      <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          Question 2
        </div>
        <div class="collapse-content"> 
          <p>input answer in this box</p>
        </div>
      </div>
      <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div class="collapse-title text-xl font-medium">
          Question 3
        </div>
        <div class="collapse-content"> 
          <p>input answer in this box</p>
        </div>
      </div>
    </div>
  )
}

export default About