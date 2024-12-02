export type OssBackend = {
    /**
     * Alibaba Cloud access key. It supports environment variables
     * `ALICLOUD_ACCESS_KEY` and `ALICLOUD_ACCESS_KEY_ID`.
     */
    access_key?: string;
    /**
     * Alibaba Cloud secret access key. It supports environment variables
     * `ALICLOUD_SECRET_KEY` and `ALICLOUD_ACCESS_KEY_SECRET`.
     */
    secret_key?: string;
    /**
     *  STS access token. It supports environment variable `ALICLOUD_SECURITY_TOKEN`.
     */
    security_token?: string;
    /**
     * The RAM Role Name attached on a ECS instance for API operations.
     * You can retrieve this from the 'Access Control' section of the Alibaba Cloud console.
     * @since 0.12.14
     */
    ecs_role_name?: string;
    /**
     * The region of the OSS bucket.
     * It supports environment variables `ALICLOUD_REGION` and `ALICLOUD_DEFAULT_REGION`.
     */
    region?: string;
    /**
     * A custom endpoint for the OSS API.
     * It supports environment variables `ALICLOUD_OSS_ENDPOINT` and `OSS_ENDPOINT`.
     */
    endpoint?: string;
    /**
     * The name of the OSS bucket.
     */
    bucket: string;
    /**
     * The path directory of the state file will be stored.
     * @default "env:"
     */
    prefix?: string;
    /**
     * The name of the state file.
     * @default "terraform.tfstate"
     */
    key?: string;
    /**
     * `ALICLOUD_TABLESTORE_ENDPOINT` A custom endpoint for the TableStore API.
     */
    tablestore_endpoint?: string;
    /**
     * A TableStore table for state locking and consistency.
     * The table must have a primary key named `LockID` of type `String`.
     */
    tablestore_table?: string;
    /**
     * Custom endpoint for the AliCloud Security Token Service (STS) API.
     * It supports environment variable `ALICLOUD_STS_ENDPOINT`.
     * @since 1.0.11
     */
    sts_endpoint?: string;
    /**
     * Whether to enable server side encryption of the state file.
     * If it is true, OSS will use 'AES256' encryption algorithm to encrypt state file.
     */
    encrypt?: boolean;
    /**
     * {@link https://www.alibabacloud.com/help/doc-detail/52284.htm Object ACL} to be applied to the state file.
     */
    acl?: string;
    /**
     * This is the path to the shared credentials file.
     * It can also be sourced from the `ALICLOUD_SHARED_CREDENTIALS_FILE` environment variable.
     * If this is not set and a profile is specified, `~/.aliyun/config.json` will be used.
     * @since 0.12.8
     */
    shared_credentials_file?: string;
    /**
     * This is the Alibaba Cloud profile name as set in the shared credentials file.
     * It can also be sourced from the `ALICLOUD_PROFILE` environment variable.
     * @since 0.12.8
     */
    profile?: string;
    /**
     * The ARN of the role to assume. If ARN is set to an empty string, it does not perform role switching.
     * It supports the environment variable `ALICLOUD_ASSUME_ROLE_ARN`.
     * Terraform executes configuration on account with provided credentials.
     * @since 1.1.0
     */
    assume_role_role_arn?: string;
    /**
     * A more restrictive policy to apply to the temporary credentials.
     * This gives you a way to further restrict the permissions for the resulting temporary security credentials.
     * You cannot use this policy to grant permissions that exceed those of the role that is being assumed.
     * @since 1.1.0
     */
    assume_role_policy?: string;
    /**
     * The session name to use when assuming the role. If omitted, 'terraform' is passed to the AssumeRole
     * call as session name. It supports environment variable `ALICLOUD_ASSUME_ROLE_SESSION_NAME`.
     * @since 1.1.0
     */
    assume_role_session_name?: string;
    /**
     * The time after which the established session for assuming role expires.
     * Valid value range: [900-3600] seconds.
     * It supports environment variable `ALICLOUD_ASSUME_ROLE_SESSION_EXPIRATION`.
     * @since 1.1.0
     * @default 3600
     */
    assume_role_session_expiration?: number;
    /**
     * If provided with a role ARN, will attempt to assume this role using the supplied credentials.
     * It will be ignored when `assume_role_role_arn` is specified.
     * @deprecated Deprecated as of 1.1.0+ in favor of flattening assumerole* options
     * @since 0.12.6
     */
    assume_role?: {
        /**
         * The ARN of the role to assume. If ARN is set to an empty string, it does not perform role switching.
         * It supports the environment variable `ALICLOUD_ASSUME_ROLE_ARN`.
         * Terraform executes configuration on account with provided credentials.
         */
        role_arn: string;
        /**
         * A more restrictive policy to apply to the temporary credentials. This gives you a way to further restrict
         * the permissions for the resulting temporary security credentials.
         * You cannot use this policy to grant permissions that exceed those of the role that is being assumed.
         */
        policy?: string;
        /**
         * The session name to use when assuming the role. If omitted, 'terraform' is passed to the AssumeRole call as session name.
         * It supports environment variable `ALICLOUD_ASSUME_ROLE_SESSION_NAME`.
         * @default "terraform"
         */
        session_name?: string;
        /**
         * The time after which the established session for assuming role expires. Valid value range: [900-3600] seconds.
         * It supports environment variable `ALICLOUD_ASSUME_ROLE_SESSION_EXPIRATION`.
         * @default 3600
         */
        session_expiration?: number;
    };
};
