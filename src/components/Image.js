import portrait from '../images/portrait.png'

function Image () {
  return (
    <div className='relative w-auto h-auto'>
      <img className='absolute left-0 bottom-0' src={portrait}
           alt='Christopher Voit Portrait' />
    </div>
  )
}

export default Image