import './mnemonic.css'
import toast from 'react-hot-toast';
import { MdOutlineContentCopy } from "react-icons/md";

function Mnemonic({getMnemonic}: any) {
    const mnemonics = getMnemonic.split(" ")
    
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(getMnemonic);
            toast.success("Copied")

        } catch (error) {
            console.error('Failed to copy text: ', error);
            toast.error('Something went wrong');
        } 
    }

  return (
   <div>
       <div className="grid grid-cols-3 gap-4 p-4 w-full">
          {
              mnemonics.map((mnemonic: any, idx: any) => (
                  <div key={idx} 
                    onClick={handleCopyClick}
                    className="text-white text-[20px] bg-gray-800 h-20 rounded-lg flex justify-center items-center nota-sans-font p-2 opacity-70 hover:opacity-100 cursor-pointer"
                  >
                    {mnemonic}
                  </div>
              ))
          }
      </div>
      <div className='text-center opacity-50 nota-sans-font flex justify-center items-center gap-3'>
        <MdOutlineContentCopy />
        <p>Tap any mnemonic to copy all of them</p>
      </div>
   </div>
  )
}

export default Mnemonic