function Header() {
  return (
    <div>
        <div>
          <h1 className='flex w-[180px] text-[40px] justify-between'>
            <div className='flex flex-col '>
              <p className='font-extrabold'>WEB</p>
              <div className='w-[90px] h-1 bg-white'></div>
            </div>
            <p className='font-medium ml-2'>Vault</p>
          </h1>
        </div>
        <div className='mt-3'>
          <h3 className='text-[20px] opacity-75'>Effortlessly Create and Manage Your Cryptocurrency Wallets.</h3>
        </div>
      </div>
  )
}

export default Header