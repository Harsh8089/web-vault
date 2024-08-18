function DisplayTotalAccounts({account, setCurrAccount}: any) {
    
  return (
    <div>
        {
              account.map((acc: any, idx: any) => (
                <div key={idx + acc}
                    onClick={() => setCurrAccount(idx + 1)}
                    className='bg-slate-800 w-[300px] h-16 mb-2 rounded-lg flex px-10 justify-between items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all duration-200'
                >
                  <div className='w-10 h-10 bg-gray-500 rounded-[50%] flex justify-center items-center'>AC{idx + 1}</div>
                  <div className='text-[18px]'>Account {idx + 1}</div>
                  <div className='opacity-50'> {'>'} </div>
                </div>
              ))
            }
    </div>
  )
}

export default DisplayTotalAccounts