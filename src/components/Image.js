import portrait from '../images/portrait.png'

function Image () {
  return (
    <div>
      <div className='left-24 top-24 bg-white w-[544px] h-[544px]'/>
      <img src={portrait} alt='Christopher Voit Portrait' />
    </div>
  )
}

export default Image