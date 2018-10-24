module.exports = {
  NODE_ENV: '"default"',
  HORIZON_SERVER: '"https://api.alice.tokend.io"',
  STORAGE_SERVER: '"https://storage.alice.tokend.io"',
  KEY_SERVER_ADMIN: '"https://admin.alice.tokend.io/_/adks"',
  NETWORK_PASSPHRASE: '"TokenD Alice Network!"',
  FEATURES: {
    PHOTO_VERIFICATION: true,
    KYC_REVIEW_MANAGER: false,
    KYC_REQUEST_STATES: [
      '"approved"',
      '"rejected"',
      '"pending"'
    ],
    KYC_TASKS: {
      superAdmin: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      photoMatch: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      validPoa: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      requestForAutoReviewSent: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      requestForAutoReviewApproved: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: true
        }
      },
      accreditedInvestor: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: false
        }
      },
      nonLatinDocs: {
        exist: true,
        render: {
          add: false,
          remove: false
        },
        selected: {
          add: false,
          remove: false
        }
      }
    }
  }
}
