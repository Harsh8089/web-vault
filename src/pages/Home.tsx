import { useState } from 'react';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { useNavigate } from 'react-router-dom';
import Mnemonic from '@/components/Mnemonic';
import { Button } from '@/components/ui/button';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';

function Home({ setMnemonicCreated }: any) {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [seedPhrase, setSeedPhrase] = useState<Buffer | null>(null);
  const [mnemonicCreated, setLocalMnemonicCreated] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='bg-black w-[100vw] h-[100vh] text-white p-10 overflow-hidden'>
      <Header /> 

      <div className="h-full mt-5 py-5 flex items-center flex-col">
        <div className="w-[70%]">
          <Toaster />
          {mnemonic ? (
            <Mnemonic getMnemonic={mnemonic}/> 
          ) : (
            <div className='w-full'>
              <p className="text-[35px] text-center font-semibold mt-10">Discover Your Personalized Mnemonics
              </p> 
            </div>
          )}
        </div>
        <div className="">
          {
            mnemonic.length == 0 ? (
              <Button
                variant={'secondary'}
                className='mt-10 w-64 h-12 py-3 text-[20px]'
                onClick={() => {
                  if (!mnemonicCreated) {
                    const newMnemonic = generateMnemonic();
                    setMnemonic(newMnemonic);
                    setSeedPhrase(mnemonicToSeedSync(newMnemonic));
                    setLocalMnemonicCreated(true);
                    setMnemonicCreated(true);   
                  }
                }}
              >
                Generate Mnemonics
              </Button>
            ) : (
              <Button
                variant={'secondary'}
                className='mt-6 w-64 h-12 py-2 text-[20px]'
                disabled={!mnemonicCreated}
                onClick={() => {
                  if (mnemonicCreated) {
                    navigate('/wallet-details', 
                      {
                        state: {mnemonic, seedPhrase}
                      }
                    ); // Navigate to the WalletDetails page
                  }
                }}
              >
                Proceed Ahead
              </Button>
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default Home;
