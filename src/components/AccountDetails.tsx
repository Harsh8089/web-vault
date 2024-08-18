function AccountDetails({ currAccount, account }: any) {
  console.log(account);

  if (!account || currAccount < 0 || currAccount >= account.length) return null;

  return (
    <div className='w-full flex flex-col items-center'>
      
      <div className='flex items-center gap-4 mb-6'>
        <div className='w-12 h-12 bg-gray-800 p-2 rounded-full flex justify-center items-center'>
          AC{currAccount}
        </div>
        <h1 className='text-[36px] font-semibold'>Account {currAccount}</h1>
      </div>

    
      <div className='w-full max-w-4xl'>
    
        <div className='flex items-start mb-4 p-4 bg-gray-900 rounded-lg relative'>
            <img src="https://cdn.pixabay.com/photo/2021/12/06/12/19/ethereum-6850203_640.png" 
                className="w-16 h-16 border-2 border-gray-600 rounded-[50%] mr-4"
            ></img>
          {/* <div className='w-16 h-16 bg-gray-500 rounded-full flex justify-center items-center mr-6'>
            ETH
          </div> */}
          <div className='flex flex-col flex-grow'>
            <p className='text-lg font-semibold'>Public Key:</p>
            <p className='text-lg text-gray-300 truncate'>{account.eth.address}</p>
            <p className='text-lg font-semibold mt-2'>Path:</p>
            <p className='text-lg text-gray-300 truncate'>{account.eth.derivationPath}</p>
          </div>
        </div>

        
        <div className='flex items-start p-4 bg-gray-900 rounded-lg relative'>
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                 className="w-16 h-16 border-2 border-gray-600 rounded-[50%] mr-4"
            ></img>
         
          <div className='flex flex-col flex-grow'>
            <p className='text-lg font-semibold'>Public Key:</p>
            <p className='text-lg text-gray-300 truncate'>{account.sol.address}</p>
            <p className='text-lg font-semibold mt-2'>Path:</p>
            <p className='text-lg text-gray-300 truncate'>{account.sol.derivationPath}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
