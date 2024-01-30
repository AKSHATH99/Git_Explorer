import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-slate-200'>
    <div className='flex'>
        <img alt='git logo' className='h-20 w-20 ml-2' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'/>
        <h1 className='text-5xl mt-5 ml-3 font-mono '> Git-Explorer</h1>
        <button className='ml-96   text-white bg-black h-max w-max p-3 mt-5 rounded-lg'>GITHUB REPO</button>
        <button className='ml-4 text-white bg-black h-max w-max p-3 mt-5 rounded-lg'>ABOUT ME</button>
    </div>
    
    </div>
  )
}

export default Header
