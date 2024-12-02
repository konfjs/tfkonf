export type RemoteBackend = {
    /**
     * The remote backend hostname to connect to.
     * @default "app.terraform.io"
     */
    hostname?: string;
    /**
     * The name of the organization containing the targeted workspace(s).
     */
    organization: string;
    /**
     * The token used to authenticate with the remote backend.
     * We recommend omitting the token from the configuration,and instead
     * using terraform login or manually configuring credentials in the CLI config file.
     */
    token?: string;
    /**
     * A block specifying which remote workspace(s) to use. The workspaces block supports the following keys:
     */
    workspaces: {
        /**
         * The full name of one remote workspace. When configured, only the default workspace can be used.
         * This option conflicts with `prefix`.
         */
        name?: string;
        /**
         * A prefix used in the names of one or more remote workspaces, all of which
         * can be used with this configuration. The full workspace names are used in HCP Terraform,
         * and the short names (minus the prefix) are used on the command line for
         * Terraform CLI workspaces. If omitted, only the default workspace can be used.
         * This option conflicts with `name`.
         */
        prefix?: string;
    };
};
