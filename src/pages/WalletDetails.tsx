import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { ethers, HDNodeWallet } from 'ethers';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import DisplayTotalAccounts from '@/components/DisplayTotalAccounts';
import AccountDetails from '@/components/AccountDetails';
import toast, { Toaster } from 'react-hot-toast';

interface Wallet {
    address: string;
    privateKey: string;
    derivationPath: string;
  }
  
interface Account {
    eth: Wallet;
    sol: Wallet;
}

function WalletDetails() {
  const location = useLocation()
  const { seedPhrase } = location.state || {}  
  const [account, setAccount] = useState<Account []>([])
  const [currAccount, setCurrAccount] = useState(1)
  

  const getAccountDetails = () => {
    function deriveKeypair(seed: any, path: string) {
        const derivedKey = derivePath(path, seed);
        const keypair = Keypair.fromSeed(derivedKey.key);
        return {
            path: path,
            publicKey: keypair.publicKey.toString(),
            privateKey: Buffer.from(keypair.secretKey).toString('hex')
        };
    }

     // eth 
     const hdNode = HDNodeWallet.fromSeed(seedPhrase)
     const ethPath = `m/44'/60'/0'/0/${account.length + 1}`
     const childNode = hdNode.derivePath(ethPath);
     const walletETH = new ethers.Wallet(childNode.privateKey);
     const ethWallet: Wallet = {
         'address': walletETH.address,
         'privateKey': walletETH.privateKey,
         'derivationPath': ethPath
     }
   
     // sol 
     const solPath = `m/44'/501'/${account.length + 1}'/0'`;
     const walletSOL = deriveKeypair(seedPhrase, solPath);
     const solWallet: Wallet = {
         'address': walletSOL.publicKey,
         'privateKey': walletSOL.privateKey,
         'derivationPath': solPath
     }

     return { 'eth': ethWallet, 'sol': solWallet }
  }

  useEffect(() => {
    if(account.length < 4) {  
      const accountDetails = getAccountDetails()
      setAccount((prevAccounts) => [...prevAccounts, accountDetails])
      toast.success("Account created succesfully"!)
    }
    else {
      toast.error("You can create up to 4 accounts only")
    }
  }, [])

  // useEffect(() => {
  //   console.log("currAccount: ",  currAccount)
  // }, [currAccount])

  
  return (
    <div className='bg-black w-[100vw] h-[100vh] text-white p-10 overflow-hidden'>
        <Header />

        <Toaster />

        <div className='mt-12 w-[70%] mx-auto flex gap-5'>

            <div className='flex flex-col'>
              <div className='mb-3'>
                <Button
                    variant={'secondary'}
                    className='py-2 text-[18px] h-12 w-[300px]'
                    onClick={() => {
                      if(account.length < 4) {  
                        const accountDetails = getAccountDetails()
                        setAccount((prevAccounts) => [...prevAccounts, accountDetails])
                        toast.success("Account created succesfully"!)
                      }
                      else {
                        toast.error("You can create up to 4 accounts only")
                      }
                    }}
                >
                  Add Account
                </Button>
              </div>
              
              <DisplayTotalAccounts account={account} setCurrAccount={setCurrAccount}/>
            </div>

            <AccountDetails currAccount={currAccount} account={account[currAccount - 1]} setAccount={setAccount}/>

        </div>
        
        
    </div>
  )
}

export default WalletDetails