import Image from './Image'
import Heading from './Heading'
import Footer from './Footer'

const colors = [
  'bg-light-blue',
  'bg-light-orange',
  'bg-light-purple',
]

function App () {
  return (
    <div className={`w-full h-screen flex items-center ${colors[Math.floor(Math.random() * colors.length)]}`}>
      <div className='container mx-auto flex justify-center mb-56'>
        <div className='grid grid-cols-2 flex items-center'>
          <Image />
          <Heading />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
