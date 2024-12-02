export type CosBackend = {
    /**
     * Secret id of Tencent Cloud. It supports environment variables `TENCENTCLOUD_SECRET_ID`.
     */
    secret_id?: string;
    /**
     * Secret key of Tencent Cloud. It supports environment variables `TENCENTCLOUD_SECRET_KEY`.
     */
    secret_key?: string;
    /**
     * TencentCloud Security Token of temporary access credentials. It supports environment variables `TENCENTCLOUD_SECURITY_TOKEN`.
     */
    security_token?: string;
    /**
     * The region of the COS bucket. It supports environment variables `TENCENTCLOUD_REGION`.
     */
    region?: string;
    /**
     * The name of the COS bucket. You shall manually create it first.
     */
    bucket: string;
    /**
     * The directory for saving the state file in bucket.
     * @default "env:"
     */
    prefix?: string;
    /**
     * The path for saving the state file in bucket.
     * @default "terraform.tfstate"
     */
    key?: string;
    /**
     * Whether to enable server side encryption of the state file.
     * If it is `true`, COS will use 'AES256' encryption algorithm to encrypt state file.
     */
    encrypt?: boolean;
    /**
     * Object ACL to be applied to the state file.
     * @default "private"
     */
    acl?: 'private' | 'public-read';
    /**
     * Whether to enable global Acceleration.
     * @default false
     */
    accelerate?: boolean;
    /**
     * The Custom Endpoint for the COS backend. It supports the environment variable `TENCENTCLOUD_ENDPOINT`.
     * A typical endpoint looks like this: `http://cos-internal.{Region}.tencentcos.cn`. Both HTTP and HTTPS are accepted.
     */
    endpoint?: string;
    /**
     * The root domain of the API request. It supports the environment variable `TENCENTCLOUD_DOMAIN`.
     * @default "tencentcloudapi.com"
     */
    domain?: string;
    /**
     * The `assume_role` block. If provided, terraform will attempt to assume this role using the supplied credentials.
     */
    assume_role?: {
        /**
         * The ARN of the role to assume. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_ARN`.
         */
        role_arn: string;
        /**
         * The session name to use when making the AssumeRole call. It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_NAME`.
         */
        session_name: string;
        /**
         * The duration of the session when making the AssumeRole call. Its value ranges from 0 to 43200(seconds).
         * It can be sourced from the `TENCENTCLOUD_ASSUME_ROLE_SESSION_DURATION`.
         * @default 7200
         */
        session_duration: number;
        /**
         * A more restrictive policy when making the AssumeRole call. Its content must not contains `principal` elements.
         */
        policy?: string;
    };
    /**
     * The directory of the shared credentials.
     * It can also be sourced from the `TENCENTCLOUD_SHARED_CREDENTIALS_DIR` environment variable.
     * @default "~/.tccli"
     */
    shared_credentials_dir?: string;
    /**
     * The profile name as set in the shared credentials.
     * It can also be sourced from the `TENCENTCLOUD_PROFILE` environment variable.
     * If not set, the default profile created with tccli configure will be used.
     */
    profile?: string;
    /**
     * The name of the CVM instance CAM role. It can be sourced from the `TENCENTCLOUD_CAM_ROLE_NAME` environment variable.
     */
    cam_role_name?: string;
};
