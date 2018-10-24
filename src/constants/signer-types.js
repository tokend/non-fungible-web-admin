export const SIGNER_TYPES = Object.freeze({
  reader: 1,
  notVerifiedAccManager: 2,
  generalAccManager: 4,
  directDebitOperator: 8,
  assetManager: 16,
  assetRateManager: 32,
  balanceManager: 64,
  issuanceManager: 128,
  invoiceManager: 256,
  paymentOperator: 512,
  limitsManager: 1024,
  accountManager: 2048,
  commissionBalanceManager: 4096,
  operationalBalanceManager: 8192,
  eventsChecker: 16384,
  exchangeAccManager: 32768,
  syndicateAccManager: 65536,
  userAssetManager: 131072,
  userIssuanceManager: 262144,
  withdrawManager: 524288,
  feesManager: 1048576,
  txSender: 2097152,
  amlAlertManager: 4194304,
  amlAlertReviewer: 8388608,
  kycAccManager: 16777216,
  kycSuperAdmin: 33554432
})
