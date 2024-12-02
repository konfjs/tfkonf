export type HttpBackend = {
    /**
     * `TF_HTTP_ADDRESS` The address of the REST endpoint
     */
    address: string;
    /**
     * `TF_HTTP_UPDATE_METHOD` HTTP method to use when updating state.
     * @default "POST"
     */
    update_method?: string;
    /**
     * `TF_HTTP_LOCK_ADDRESS` The address of the lock REST endpoint. Defaults to disabled.
     */
    lock_address?: string;
    /**
     * `TF_HTTP_LOCK_METHOD` The HTTP method to use when locking.
     * @default "LOCK"
     */
    lock_method?: string;
    /**
     * `TF_HTTP_UNLOCK_ADDRESS` The address of the unlock REST endpoint. Defaults to disabled.
     */
    unlock_address?: string;
    /**
     * `TF_HTTP_UNLOCK_METHOD` The HTTP method to use when unlocking.
     * @default "UNLOCK"
     */
    unlock_method?: string;
    /**
     * `TF_HTTP_USERNAME` The username for HTTP basic authentication
     */
    username?: string;
    /**
     * `TF_HTTP_PASSWORD` The password for HTTP basic authentication
     */
    password?: string;
    /**
     * Whether to skip TLS verification.
     * @default false
     */
    skip_cert_verification?: boolean;
    /**
     * `TF_HTTP_RETRY_MAX` The number of HTTP request retries.
     * @default 2
     */
    retry_max?: number;
    /**
     * `TF_HTTP_RETRY_WAIT_MIN` The minimum time in seconds to wait between HTTP request attempts.
     * @default 1
     */
    retry_wait_min?: number;
    /**
     * `TF_HTTP_RETRY_WAIT_MAX` The maximum time in seconds to wait between HTTP request attempts.
     * @default 30
     */
    retry_wait_max?: number;
    /**
     * `TF_HTTP_CLIENT_CERTIFICATE_PEM` A PEM-encoded certificate used by the server to
     * verify the client during mutual TLS (mTLS) authentication.
     */
    client_certificate_pem?: string;
    /**
     * `TF_HTTP_CLIENT_PRIVATE_KEY_PEM` A PEM-encoded private key, required if client_certificate_pem is specified.
     */
    client_private_key_pem?: string;
    /**
     * `TF_HTTP_CLIENT_CA_CERTIFICATE_PEM` A PEM-encoded CA certificate chain used by the client
     * to verify server certificates during TLS authentication.
     */
    client_ca_certificate_pem?: string;
};
