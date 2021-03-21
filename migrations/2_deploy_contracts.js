var KetherHomepage = artifacts.require('./KetherHomepage.sol')

module.exports = function (deployer, network, accounts) {
  console.log('Deploying to: ', network, accounts)
  // We deploy the contract with the ownder being the first address from accounts
  const owner = 0x7fa2ef81cf04d39a83d990533ba9989455669564
  if (network == 'live') {
    const withdrawWallet = '0x7FA2eF81cF04D39A83d990533ba9989455669564'
    deployer.deploy(KetherHomepage, owner, withdrawWallet)
    return
  }

  deployer.deploy(KetherHomepage, owner, owner)
}
