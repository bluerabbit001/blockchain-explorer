/**
 * Importing Libraries
 */
import Chain from '@aeternity/aepp-sdk/es/chain/epoch'
import Tx from '@aeternity/aepp-sdk/es/tx/epoch'
import Contract from '@aeternity/aepp-sdk/es/ae/contract'
import Account from '@aeternity/aepp-sdk/es/account/memory'

//TODO: delete after SDK doesn't require a valid keyPair for Contrac
import { generateKeyPair } from '@aeternity/aepp-sdk/es/utils/crypto'

const AeClient = Chain
  .compose(Tx)
  .compose(Contract)
  .compose(Account)
  //.debugSwagger(true)

const ae = AeClient({
  url: process.env.AETERNITY_EPOCH_API_URL,
  keypair: generateKeyPair()
})

window.ae = ae
/**
 * Exporting AEPP SDK Instance
 */
export default ae