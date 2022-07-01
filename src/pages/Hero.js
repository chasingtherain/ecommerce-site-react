import React from 'react'
import { useNavigate } from 'react-router'


function Hero() {
  const navigate = useNavigate()

  return (
    <div>
        <div class="hero min-h-screen">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-xl">
            <h1 class="mt-0 mb-10 text-7xl font-bold">powdery feeling.</h1>
            <p class="mb-20">
            There’s nothing better than hitting first chair to get fresh tracks in powder. That deep, fluffy, billowy stuff is what many snowboarders dream about. Snowboarding in powder can feel close to flying—a smooth, elegant, quiet ride where your board doesn’t hit bottom and gravity doesn’t fight you. But riding powder can be a challenge for beginners. If you don’t know the techniques, you’ll spend a lot of time falling and getting up, which will quickly tire you out. Your legs will also burn out more quickly if you’re using poor form.
            </p>
            <button onClick={() => navigate("/products")} class="btn btn-primary mb-40">Explore Products</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero