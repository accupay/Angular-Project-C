import versions from "./_versions";
export const environment = {
  account_type_ref_id: "3",
  beneficiary_validate_amount: "1",
  dataEncrptionCode: "atp-service-line",
  retailerDatakey: "retailer-source",
  production: true,
  apiProtocol: "https",
  authApiServerAddress: "https://authapi.bankstack.in",
  dmtApiServerAddress: "https://serviceapi.bankstack.in",
  cacheApiServerAddress: "https://cacheapi.bankstack.in",
  merchantApiServerAddress:"https://prodmerchant.accupayd.co",
  apiPort: 111,
  authConfig: {
    ip: "60.243.102.152",
    authorityDomain: "", // domain of the tenant
    signInFlowName: "", // user flow used for sign in
    mac_id: "521E61D3-A3F7-48B1-B3F9-0BF23E5B67B7", // the Web UI's client ID (GUID)
    appIdOrName: "apt-api", // the API's name or client ID (GUID)
  },
  version: versions.version,
  commitHash: versions.gitCommitHash,
};
