function Footer () {
  return (
    <div className='
    fixed left-0 bottom-0 w-full bg-white py-4
    2xl:py-16'>
      <div className='
      flex flex-wrap items-center font-roboto font-light
      2xl:text-2xl 2xl: mx-16
      xl:text-2xl
      lg:text-2xl
      md:text-xl'>
        <p className='
        block w-full mb-4 text-center
        sm:inline sm:w-auto sm:mb-auto'>Christopher Voit</p>
        <div className='
        font-light text-center w-full
        xl:text-2xl
        sm:ml-auto sm:space-x-8 sm:w-auto'>
          <a target='_blank' rel='noopener noreferrer'
             href='https://www.linkedin.com/in/christophervoit/'
             className='
             block w-full mb-4 mx-auto
             sm:w-auto sm:inline sm:mx-auto
             hover:underline'>Linkedin</a>
          <a target='_blank' rel='noopener noreferrer'
             href='https://github.com/ChriAZi'
             className='
             block w-full mb-4 mx-auto
             sm:w-auto sm:inline sm:mx-auto
             hover:underline'>Github</a>
          <a target='_blank' rel='noopener noreferrer'
             href='mailto:hello@christophervoit.de'
             className='
             block w-full mx-auto
             sm:w-auto sm:inline sm:mx-auto
             hover:underline'>Mail</a>
        </div>
      </div>
    </div>
  )
}

export default Footer