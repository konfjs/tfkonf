export type LocalBackend = {
    /**
     * The path to the tfstate file. This defaults to `terraform.tfstate` relative to the root module by default.
     * @default "terraform.tfstate"
     */
    path?: string;
    /**
     * The path to non-default workspaces.
     */
    workspace_dir?: string;
};
