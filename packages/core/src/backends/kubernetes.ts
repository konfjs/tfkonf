export type KubernetesBackend = {
    /**
     * Suffix used when creating the secret. The secret will be named in the format:
     * `tfstate-{workspace}-{secret_suffix}`.
     * Note that the backend may append its own numeric index to the secret name when chunking
     * large state files into multiple secrets. In this case, there will be multiple secrets
     * named in the format: `tfstate-{workspace}-{secret_suffix}-{index}`.
     */
    secret_suffix: string;
    /**
     * Map of additional labels to be applied to the secret and lease.
     */
    labels?: Record<string, string>;
    /**
     * Namespace to store the secret and lease in. Can be sourced from `KUBE_NAMESPACE`.
     */
    namespace?: string;
    /**
     * Used to authenticate to the cluster from inside a pod. Can be sourced from `KUBE_IN_CLUSTER_CONFIG`.
     */
    in_cluster_config?: boolean;
    /**
     * The hostname (in form of URI) of Kubernetes master. Can be sourced from `KUBE_HOST`.
     * @default "https://localhost"
     */
    host?: string;
    /**
     * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
     * Can be sourced from `KUBE_USER`.
     */
    username?: string;
    /**
     * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
     * Can be sourced from `KUBE_PASSWORD`.
     */
    password?: string;
    /**
     *  Whether server should be accessed without verifying the TLS certificate.
     * Can be sourced from `KUBE_INSECURE`.
     * @default false
     */
    insecure?: boolean;
    /**
     * PEM-encoded client certificate for TLS authentication.
     * Can be sourced from `KUBE_CLIENT_CERT_DATA`.
     */
    client_certificate?: string;
    /**
     * PEM-encoded client certificate key for TLS authentication.
     * Can be sourced from `KUBE_CLIENT_KEY_DATA`.
     */
    client_key?: string;
    /**
     * PEM-encoded root certificates bundle for TLS authentication.
     * Can be sourced from `KUBE_CLUSTER_CA_CERT_DATA`.
     */
    cluster_ca_certificate?: string;
    /**
     * Path to the kube config file. Can be sourced from `KUBE_CONFIG_PATH`.
     */
    config_path?: string;
    /**
     * List of paths to kube config files. Can be sourced from `KUBE_CONFIG_PATHS`.
     */
    config_paths?: string[];
    /**
     * Context to choose from the config file. Can be sourced from `KUBE_CTX`.
     */
    config_context?: string;
    /**
     * Authentication info context of the kube config (name of the kubeconfig user, `--user` flag in `kubectl`).
     * Can be sourced from `KUBE_CTX_AUTH_INFO`.
     */
    config_context_auth_info?: string;
    /**
     * Cluster context of the kube config (name of the kubeconfig cluster, `--cluster` flag in `kubectl`).
     * Can be sourced from `KUBE_CTX_CLUSTER`.
     */
    config_context_cluster?: string;
    /**
     * Token of your service account. Can be sourced from `KUBE_TOKEN`.
     */
    token?: string;
    /**
     * Configuration block to use an {@link https://kubernetes.io/docs/reference/access-authn-authz/authentication/#client-go-credential-plugins exec-based credential plugin},
     * e.g. call an external command to receive user credentials.
     */
    exec?: {
        /**
         * API version to use when decoding the ExecCredentials resource, e.g. `client.authentication.k8s.io/v1beta1`.
         */
        api_version: string;
        /**
         * Command to execute.
         */
        command: string;
        /**
         * List of arguments to pass when executing the plugin.
         */
        args?: string[];
        /**
         * Map of environment variables to set when executing the plugin.
         */
        env?: Record<string, string>;
    };
};
