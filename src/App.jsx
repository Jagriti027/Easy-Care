import { useEffect, useState } from 'react'
import Login from './components/Login'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom';
import {
  Route, Routes
} from 'react-router-dom';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import HealthBk from "./artifacts/contracts/Health.sol/HealthBk.json"
import Approve from './components/Approve';
import AddFile from './components/AddFile';
import DashboardOther from './components/DashboardOther';
function App() {
  const navigate = useNavigate()
  const [accountAddress, SetaccountAddress] = useState();
  const [Provider, setProvider] = useState();
  const [Signer, setSigner] = useState();
  const [ContractAddress, setContractAddress] = useState();
  const [address, setAddress] = useState();
  const [Contract, setContract] = useState();
  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    console.log(provider)
    const contract = new ethers.Contract(
      contractAddress,
      HealthBk.abi,
      provider
    );
    const signer = provider.getSigner()
    const signerAccount = contract.connect(signer);
    const accountAddress = await signer.getAddress()
    setAddress(accountAddress)
    console.log(accountAddress);
    setContract(contract);
    SetaccountAddress(accountAddress);
    setProvider(provider);
    setSigner(signerAccount);
    setContractAddress(contractAddress);
    return accountAddress
  };
  useEffect(() => {
    if (localStorage.getItem("user") == undefined) {
      navigate("/login")
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login connectWallet={connectWallet} />} />
        <Route path='/profile/:address/:type' element={<Profile Contract={Contract} Signer={Signer} />} />
        <Route path='/add-file' element={<AddFile Signer={Signer} />} />
        <Route path='/dashboard' element={<Dashboard Signer={Signer} />} />
        <Route path='/dashboard/:type' element={<DashboardOther Signer={Signer} />} />
        <Route path='/approve-address/:hash' element={<Approve Signer={Signer} />} />
      </Routes>
    </div>
  )
}

export default App
