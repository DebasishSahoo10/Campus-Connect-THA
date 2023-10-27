import { useState } from 'react'
import './App.css'
import { posts } from './Database/DB'
import { Accordions } from './Pre Comps/Accordions'
import { Card } from './Pre Comps/Card'
import { Hero } from './Pre Comps/Hero'
import { TopNav } from './Pre Comps/TopNav'

function App() {
  const [searchKeys, setSearchKeys] = useState<string>("")
  const [categoryKeys, setCategoryKeys] = useState<string[]>([])
  const [typekeys, setTypeKeys] = useState<string[]>([])
  const [payTypeKeys, setPayTypeKeys] = useState<string[]>([])
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchKeys.toLowerCase()) && (categoryKeys.includes(post.category) || categoryKeys.length === 0) && (typekeys.includes(post.type) || typekeys.length === 0) && (payTypeKeys.includes(post.payType) || payTypeKeys.length === 0))

  return (
    <>
      <TopNav searchSetter={setSearchKeys} />
      <Hero />
      <div className='flex lg:flex-row flex-col gap-2 lg:gap-10'>
        <Accordions categorySetter={setCategoryKeys} categoryKeys={categoryKeys} typeKeys={typekeys} typeSetter={setTypeKeys} payTypeSetter={setPayTypeKeys} payTypeKeys={payTypeKeys} />
        <div className='flex flex-col lg:w[90%] w-[100%]'>
          {filteredPosts.map(post =>
            <Card post={post} key={post._id} />
          )}
          {filteredPosts.length === 0 && <p className='text-lg mt-5 font-semibold'>No Such Oppertunities 🙃</p>}
        </div>
      </div>
    </>
  )
}

export default App
