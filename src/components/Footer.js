function Footer () {
  return (
    <div className='fixed left-0 bottom-0 w-full py-16 bg-white'>
      <div className='container mx-auto font-roboto font-light text-4xl flex'>
        <p className='inline'>Christopher Voit</p>
        <div className='ml-auto space-x-8 text-2xl font-light'>
          <a className='hover:underline' target='_blank' rel='noopener noreferrer'
             href='https://www.linkedin.com/in/christophervoit/'>LinkedIn</a>
          <a className='hover:underline' target='_blank' rel='noopener noreferrer'
             href='https://github.com/ChriAZi'>Github</a>
          <a className='hover:underline' target='_blank' rel='noopener noreferrer'
             href='mailto:hello@christophervoit.de'>Mail</a>
        </div>
      </div>
    </div>
  )
}

export default Footer