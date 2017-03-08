export interface Server {
  id?: number;
  name: string,
  domain: string,
  network: string,
  ip: string,
  netmask: string,
  router: string,
  ns1: string,
  ns2: string,
  so?: string,
  version: string,
  arch: string,
  function: string,
  user: string,
  password: string,
}
