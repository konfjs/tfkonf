export type S3Backend = {
    /**
     * AWS Region of the S3 Bucket and DynamoDB Table (if used).
     * This can also be sourced from the `AWS_DEFAULT_REGION` and
     * `AWS_REGION` environment variables.
     */
    region: string;
    /**
     * Whether to use a lockfile for locking the state file.
     * @experimental
     * @since 1.10
     * @default false
     */
    use_lockfile?: boolean;
    /**
     * AWS access key. If configured, must also configure `secret_key`.
     * This can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable,
     * AWS shared credentials file (e.g. `~/.aws/credentials`), or AWS shared
     * configuration file (e.g. `~/.aws/config`).
     */
    access_key?: string;
    /**
     * List of allowed AWS account IDs to prevent potential destruction of a live environment.
     * Conflicts with `forbidden_account_ids`.
     */
    allowed_account_ids?: string[];
    /**
     * File containing custom root and intermediate certificates.
     * Can also be set using the `AWS_CA_BUNDLE` environment variable.
     * Setting ca_bundle in the shared config file is not supported.
     */
    custom_ca_bundle?: string;
    /**
     * Custom endpoint URL for the EC2 Instance Metadata Service (IMDS) API.
     * Can also be set with the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.
     */
    ec2_metadata_service_endpoint?: string;
    /**
     * Mode to use in communicating with the metadata service.
     * Can also be set with the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.
     */
    ec2_metadata_service_endpoint_mode?: 'IPv4' | 'IPv6';
    /**
     * List of forbidden AWS account IDs to prevent potential destruction of a live environment.
     * Conflicts with `allowed_account_ids`.
     */
    forbidden_account_ids?: string[];
    /**
     * URL of a proxy to use for HTTP requests when accessing the AWS API.
     * Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.
     */
    http_proxy?: string;
    /**
     * URL of a proxy to use for HTTPS requests when accessing the AWS API.
     * Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.
     */
    https_proxy?: string;
    /**
     * Custom endpoint URL for the AWS Identity and Access Management (IAM) API.
     * @deprecated Use `endpoints.iam` instead.
     */
    iam_endpoint?: string;
    /**
     * Whether to explicitly allow the backend to perform "insecure" SSL requests.
     * @default false
     */
    insecure?: boolean;
    /**
     * Comma-separated list of hosts that should not use HTTP or HTTPS proxies. Each value can be one of:
     * - A domain name
     * - An IP address
     * - A CIDR address
     * - An asterisk (*), to indicate that no proxying should be performed Domain name and IP address
     * values can also include a port number.
     * Can also be set using the `NO_PROXY` or `no_proxy` environment variables.
     */
    no_proxy?: string;
    /**
     * The maximum number of times an AWS API request is retried on retryable failure.
     * @default 5
     */
    max_retries?: number;
    /**
     * Name of AWS profile in AWS shared credentials file (e.g. `~/.aws/credentials`) or
     * AWS shared configuration file (e.g. `~/.aws/config`) to use for credentials and/or configuration.
     * This can also be sourced from the `AWS_PROFILE` environment variable.
     */
    profile?: string;
    /**
     * Specifies how retries are attempted.
     * Can also be configured using the `AWS_RETRY_MODE` environment variable or the
     * shared config file parameter `retry_mode`.
     */
    retry_mode?: 'standard' | 'adaptive';
    /**
     * AWS access key. If configured, must also configure `access_key`.
     * This can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable,
     * AWS shared credentials file (e.g. `~/.aws/credentials`), or
     * AWS shared configuration file (e.g. `~/.aws/config`).
     */
    secret_key?: string;
    /**
     * List of paths to AWS shared configuration files.
     * @default ["~/.aws/config"]
     */
    shared_config_files?: string[];
    /**
     * Path to the AWS shared credentials file.
     * @deprecated use `shared_credentials_files` instead
     * @default "~/.aws/credentials"
     */
    shared_credentials_file?: string;
    /**
     * List of paths to AWS shared credentials files.
     * @default ["~/.aws/credentials"]
     */
    shared_credentials_files?: string[];
    /**
     * Skip credentials validation via the STS API.
     * Useful for testing and for AWS API implementations that do not have STS available.
     */
    skip_credentials_validation?: boolean;
    /**
     * Skip validation of provided region name.
     */
    skip_region_validation?: boolean;
    /**
     * Whether to skip requesting the account ID.
     * Useful for AWS API implementations that do not have the IAM, STS API, or metadata API.
     */
    skip_requesting_account_id?: boolean;
    /**
     * Skip usage of EC2 Metadata API.
     */
    skip_metadata_api_check?: boolean;
    /**
     * Do not include checksum when uploading S3 Objects. Useful for some S3-Compatible APIs.
     */
    skip_s3_checksum?: boolean;
    /**
     * Custom endpoint URL for the AWS Security Token Service (STS) API.
     * @deprecated Use `endpoints.sts` instead.
     */
    sts_endpoint?: string;
    /**
     * AWS region for STS. If unset, AWS will use the same region for STS as other non-STS operations.
     */
    sts_region?: string;
    /**
     * Multi-Factor Authentication (MFA) token.
     * This can also be sourced from the `AWS_SESSION_TOKEN` environment variable.
     */
    token?: string;
    /**
     * Force the backend to resolve endpoints with DualStack capability.
     * Can also be set with the `AWS_USE_DUALSTACK_ENDPOINT` environment variable or
     * in a shared config file (`use_dualstack_endpoint`).
     */
    use_dualstack_endpoint?: boolean;
    /**
     * Force the backend to resolve endpoints with FIPS capability.
     * Can also be set with the `AWS_USE_FIPS_ENDPOINT` environment variable or
     * in a shared config file (`use_fips_endpoint`).
     */
    use_fips_endpoint?: boolean;
    /**
     * Overriding AWS API endpoints
     * The environment variable `AWS_ENDPOINT_URL` can be used to set a base endpoint URL for all services.
     * Endpoints can also be overridden using the
     * {@link https://docs.aws.amazon.com/sdkref/latest/guide/feature-ss-endpoints.html#ss-endpoints-config AWS shared configuration file}.
     * Setting the parameter `endpoint_url` on a profile will set that endpoint for all services.
     * To set endpoints for specific services, create a `services` section and set the `endpoint_url`
     * parameters for each desired service. Endpoints set for specific services will override
     * the base endpoint configured in the profile.
     */
    endpoints?: {
        /**
         * Custom endpoint URL for the AWS DynamoDB API.
         * This can also be sourced from the environment variable `AWS_ENDPOINT_URL_DYNAMODB` or the
         * deprecated environment variable `AWS_DYNAMODB_ENDPOINT`.
         */
        dynamodb?: string;
        /**
         * Custom endpoint URL for the AWS IAM API.
         * This can also be sourced from the environment variable `AWS_ENDPOINT_URL_IAM` or the
         * deprecated environment variable `AWS_IAM_ENDPOINT`.
         */
        iam?: string;
        /**
         * Custom endpoint URL for the AWS S3 API.
         * This can also be sourced from the environment variable `AWS_ENDPOINT_URL_S3` or the
         * deprecated environment variable `AWS_S3_ENDPOINT`.
         */
        s3?: string;
        /**
         * Custom endpoint URL for the AWS IAM Identity Center (formerly known as AWS SSO) API.
         * This can also be sourced from the environment variable `AWS_ENDPOINT_URL_SSO`.
         */
        sso?: string;
        /**
         * Custom endpoint URL for the AWS STS API.
         * This can also be sourced from the environment variable `AWS_ENDPOINT_URL_STS` or the
         * deprecated environment variable `AWS_STS_ENDPOINT`.
         */
        sts?: string;
    };
    /**
     * Assume Role With Web Identity Configuration
     */
    assume_role_with_web_identity?: {
        /**
         * Amazon Resource Name (ARN) of the IAM Role to assume.
         * Can also be set with the `AWS_ROLE_ARN` environment variable.
         */
        role_arn: string;
        /**
         * The duration individual credentials will be valid. Credentials are automatically renewed up
         * to the maximum defined by the AWS account. Specified using the
         * format `<hours>h<minutes>m<seconds>s` with any unit being optional.
         * For example, an hour and a half can be specified as `1h30m` or `90m`.
         * Must be between 15 minutes (15m) and 12 hours (12h).
         */
        duration?: number;
        /**
         * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
         */
        policy?: string;
        /**
         * Set of Amazon Resource Names (ARNs) of IAM Policies describing further
         * restricting permissions for the IAM Role being assumed.
         */
        policy_arns?: string[];
        /**
         * Session name to use when assuming the role.
         * Can also be set with the `AWS_ROLE_SESSION_NAME` environment variable.
         */
        session_name?: string;
        /**
         * The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.
         * One of `web_identity_token` or `web_identity_token_file` is required.
         */
        web_identity_token?: string;
        /**
         * File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.
         * One of `web_identity_token_file` or `web_identity_token` is required.
         * Can also be set with the `AWS_WEB_IDENTITY_TOKEN_FILE` environment variable.
         */
        web_identity_token_file?: string;
    };
    /**
     * Name of the S3 Bucket.
     */
    bucket: string;
    /**
     * Path to the state file inside the S3 Bucket.
     * When using a non-default workspace, the state path will
     * be `<workspace_key_prefix>/<workspace_name>/<key>`
     * (see also the `workspace_key_prefix` configuration).
     */
    key: string;
    /**
     * {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl Canned ACL}
     * to be applied to the state and lock files.
     */
    acl?: string;
    /**
     * Enable {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html server side encryption}
     * of the state and lock files.
     */
    encrypt?: boolean;
    /**
     * Custom endpoint URL for the AWS S3 API.
     * @deprecated Use `endpoints.s3` instead.
     */
    endpoint?: string;
    /**
     * Enable path-style S3 URLs (`https://<HOST>/<BUCKET>` instead of `https://<BUCKET>.<HOST>`).
     * @deprecated
     */
    force_path_style?: boolean;
    /**
     * Amazon Resource Name (ARN) of a Key Management Service (KMS) Key to use for
     * encrypting the state and lock files. Note that if this value is specified,
     * Terraform will need `kms:Encrypt`, `kms:Decrypt` and `kms:GenerateDataKey`
     * permissions on this KMS key.
     */
    kms_key_id?: string;
    /**
     * The key to use for encrypting state and lock files with Server-Side Encryption
     * with Customer-Provided Keys (SSE-C). This is the base64-encoded value of the key,
     * which must decode to 256 bits.
     * This can also be sourced from the `AWS_SSE_CUSTOMER_KEY` environment variable,
     * which is recommended due to the sensitivity of the value.
     * Setting it inside a terraform file will cause it to be persisted to disk in `terraform.tfstate`.
     */
    sse_customer_key?: string;
    /**
     * Enable path-style S3 URLs (`https://<HOST>/<BUCKET>` instead of `https://<BUCKET>.<HOST>`).
     */
    use_path_style?: boolean;
    /**
     * Prefix applied to the state path inside the bucket.
     * This is only relevant when using a non-default workspace.
     * @default "env:"
     */
    workspace_key_prefix?: string;
    /**
     * Custom endpoint URL for the AWS DynamoDB API.
     * @deprecated Use `endpoints.dynamodb` instead.
     */
    dynamodb_endpoint?: string;
    /**
     * Name of DynamoDB Table to use for state locking and consistency.
     * The table must have a partition key named `LockID` with type of `String`.
     */
    dynamodb_table?: string;
};
