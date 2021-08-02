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
    <div
      className={`w-full h-screen flex justify-center items-center ${colors[Math.floor(Math.random() * colors.length)]}`}>
      <div className={'grid grid-cols-2'}>
        <Image />
        <Heading />
      </div>
      <Footer />
    </div>
  )
}

export default App
