export type ConsulBackend = {
    /**
     * Path in the Consul KV store
     */
    path: string;
    /**
     * `CONSUL_HTTP_TOKEN` Access token
     */
    access_token: string;
    /**
     * `CONSUL_HTTP_ADDR` DNS name and port of your Consul endpoint specified
     * in the format `dnsname:port`. Defaults to the local agent HTTP listener.
     */
    address?: string;
    /**
     * Specifies what protocol to use when talking to the given `address`, either `http` or `https`.
     * SSL support can also be triggered by setting then environment variable `CONSUL_HTTP_SSL` to `true`.
     */
    scheme?: string;
    /**
     * The datacenter to use. Defaults to that of the agent.
     */
    datacenter?: string;
    /**
     * `CONSUL_HTTP_AUTH` HTTP Basic Authentication credentials to be used when communicating with Consul,
     * in the format of either `user` or `user:pass`.
     */
    http_auth?: string;
    /**
     * `true` to compress the state data using gzip, or `false` (the default) to leave it uncompressed.
     * @default false
     */
    gzip?: boolean;
    /**
     * `false` to disable locking. This defaults to true, but will require session permissions
     * with Consul and at least kv write permissions on `$path/.lock` to perform locking.
     * @default true
     */
    lock?: boolean;
    /**
     * `CONSUL_CACERT` A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.
     */
    ca_file?: string;
    /**
     * `CONSUL_CLIENT_CERT` A path to a PEM-encoded certificate provided to the remote agent; requires use of `key_file`.
     */
    cert_file?: string;
    /**
     * `CONSUL_CLIENT_KEY` A path to a PEM-encoded private key, required if `cert_file` is specified.
     */
    key_file?: string;
};
