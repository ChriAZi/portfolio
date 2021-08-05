import Heading from './Heading'
import Footer from './Footer'

function App () {
  return (
    <div className='
    h-full flex bg-light-blue
    sm:items-center'>
      <div className='
      flex justify-start mx-6 overflow-auto py-6
      md:mb-24 md:mx-16'>
        <div className='
        w-full
        lg:w-2/4
        md:w-3/4
        sm:w-3/4'>
          <Heading />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
