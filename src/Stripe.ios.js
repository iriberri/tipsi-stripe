import { NativeModules } from 'react-native'
import processTheme from './utils/processTheme'
import checkArgs from './utils/checkArgs'
import checkInit from './utils/checkInit'
import * as types from './utils/types'

const { TPSStripeManager } = NativeModules

class Stripe {
  stripeInitialized = false
  init = (options = {}) => {
    checkArgs(
      types.initOptionsPropTypes,
      options, 'options', 'Stripe.init'
    )
    this.stripeInitialized = true
    return TPSStripeManager.init(options)
  }
  deviceSupportsApplePay = () => {
    checkInit(this)
    TPSStripeManager.deviceSupportsApplePay()
  }
  canMakeApplePayPayments = (options = {}) => {
    checkArgs(
      types.canMakeApplePayPaymentsOptionsPropTypes,
      options, 'options', 'Stripe.canMakeApplePayPayments'
    )
    checkInit(this)
    return TPSStripeManager.canMakeApplePayPayments(options)
  }
  paymentRequestWithApplePay = (items = [], options = {}) => {
    checkArgs(
      types.paymentRequestWithApplePayItemsPropTypes,
      { items }, 'items', 'Stripe.paymentRequestWithApplePay'
    )
    checkArgs(
      types.paymentRequestWithApplePayOptionsPropTypes,
      options, 'options', 'Stripe.paymentRequestWithApplePay'
    )
    checkInit(this)
    return TPSStripeManager.paymentRequestWithApplePay(items, options)
  }
  completeApplePayRequest = () => {
    checkInit(this)
    TPSStripeManager.completeApplePayRequest()
  }
  cancelApplePayRequest = () => {
    checkInit(this)
    TPSStripeManager.cancelApplePayRequest()
  }
  openApplePaySetup = () => {
    checkInit(this)
    TPSStripeManager.openApplePaySetup()
  }
  paymentRequestWithCardForm = (options = {}) => {
    checkArgs(
      types.paymentRequestWithCardFormOptionsPropTypes,
      options, 'options', 'Stripe.paymentRequestWithCardForm'
    )
    checkInit(this)
    return TPSStripeManager.paymentRequestWithCardForm({
      ...options,
      theme: processTheme(options.theme),
    })
  }
  createTokenWithCard = (params = {}) => {
    checkArgs(
      types.createTokenWithCardParamsPropTypes,
      params, 'params', 'Stripe.createTokenWithCard'
    )
    checkInit(this)
    return TPSStripeManager.createTokenWithCard(params)
  }
  createTokenWithBankAccount = (params = {}) => {
    checkArgs(
      types.createTokenWithBankAccountParamsPropTypes,
      params, 'params', 'Stripe.createTokenWithBankAccount'
    )
    checkInit(this)
    return TPSStripeManager.createTokenWithBankAccount(params)
  }
}

export default new Stripe()
