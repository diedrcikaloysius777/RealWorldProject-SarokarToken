const initialize = () => {
  const connectbutton = document.getElementById('connect-button');
  const footertext = document.getElementById('footer-text');
  const input = document.getElementById('from-input');
  const balancetext = document.getElementById('balance');

  const MetaMaskClientCheck = () => {
    connectbutton.innerText = 'Connect to wallet';
    footertext.innerText = 'Wallet not connected';
    connectbutton.onclick = onClickConnect;
    connectbutton = true;
    if(connectbutton == true){
        connectbutton.innerText = 'Pre-sale not started';
    }
 };
 

 const onClickConnect = async () => {
   try {
     const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
     connectbutton.innerText = 'Swap';
     footertext.innerText = 'Wallet: ' + accounts[0];
   } catch (error) {
     console.error(error);
   }
 };
 MetaMaskClientCheck();
}

window.addEventListener('DOMContentLoaded', initialize)

connectbutton.addEventListener("click", () => {
  if(connectbutton.innerText == 'Swap'){
    value = input.value * 1000000000000000000;
    value = value.toString(16);
    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0x1A13B8600', // customizable by user during MetaMask confirmation.
      gas: '0x33450', // customizable by user during MetaMask confirmation.
      to: '0xEcD086805Ab82338929F8dDDDE0bE8542aF7CA03', // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x' + value, // Only required to send ether to the recipient from the initiating external account.
      chainId: '0x38', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
    const txHash = ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
  }
});
