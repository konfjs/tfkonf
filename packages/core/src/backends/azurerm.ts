export type AzurermBackend = {
    /**
     * The Name of the Storage Account.
     */
    storage_account_name: string;
    /**
     * The Name of the Storage Container within the Storage Account.
     */
    container_name: string;
    /**
     * The name of the Blob used to retrieve/store Terraform's State file inside the Storage Container.
     */
    key: string;
    /**
     * The Azure Environment which should be used. This can also be sourced from the `ARM_ENVIRONMENT`environment variable.
     * @default "public"
     */
    environment?: 'public' | 'china' | 'german' | 'stack' | 'usgovernment';
    /**
     * The Custom Endpoint for Azure Resource Manager. This can also be sourced from the `ARM_ENDPOINT`environment variable.
     * NOTE: An `endpoint` should only be configured when using Azure Stack.
     */
    endpoint?: string;
    /**
     * The Hostname of the Azure Metadata Service (for example management.azure.com),
     * used to obtain the Cloud Environment when using a Custom Azure Environment.
     * This can also be sourced from the `ARM_METADATA_HOSTNAME` Environment Variable.
     */
    metadata_host?: string;
    /**
     * Should the Blob used to store the Terraform Statefile be snapshotted before use?
     * This value can also be sourced from the `ARM_SNAPSHOT` environment variable.
     * @default false
     */
    snapshot?: boolean;
    /**
     * The Name of the Resource Group in which the Storage Account exists.
     */
    resource_group_name: string;
    /**
     * The path to a custom Managed Service Identity endpoint which is automatically determined if not specified.
     * This can also be sourced from the `ARM_MSI_ENDPOINT` environment variable.
     */
    msi_endpoint?: string;
    /**
     * The Subscription ID in which the Storage Account exists.
     * This can also be sourced from the `ARM_SUBSCRIPTION_ID` environment variable.
     */
    subscription_id?: string;
    /**
     * The Tenant ID in which the Subscription exists.
     * This can also be sourced from the `ARM_TENANT_ID` environment variable.
     */
    tenant_id?: string;
    /**
     * Should Managed Service Identity authentication be used?
     * This can also be sourced from the `ARM_USE_MSI` environment variable.
     */
    use_msi?: boolean;
    /**
     * The URL for the OIDC provider from which to request an ID token.
     * This can also be sourced from the `ARM_OIDC_REQUEST_URL` or `ACTIONS_ID_TOKEN_REQUEST_URL` environment variables.
     */
    oidc_request_url?: string;
    /**
     * The bearer token for the request to the OIDC provider.
     * This can also be sourced from the `ARM_OIDC_REQUEST_TOKEN` or `ACTIONS_ID_TOKEN_REQUEST_TOKEN` environment variables.
     */
    oidc_request_token?: string;
    /**
     * The ID token when authenticating using OpenID Connect (OIDC).
     * This can also be sourced from the `ARM_OIDC_TOKEN` environment variable.
     */
    oidc_token?: string;
    /**
     * The path to a file containing an ID token when authenticating using OpenID Connect (OIDC).
     * This can also be sourced from the `ARM_OIDC_TOKEN_FILE_PATH` environment variable.
     */
    oidc_token_file_path?: string;
    /**
     * Should OIDC authentication be used?
     * This can also be sourced from the `ARM_USE_OIDC` environment variable.
     */
    use_oidc?: boolean;
    /**
     * The SAS Token used to access the Blob Storage Account.
     * This can also be sourced from the `ARM_SAS_TOKEN` environment variable.
     */
    sas_token?: string;
    /**
     * The Access Key used to access the Blob Storage Account.
     * This can also be sourced from the `ARM_ACCESS_KEY` environment variable.
     */
    access_key?: string;
    /**
     * Whether Azure Active Directory Authentication should be used to access the Blob Storage Account.
     * This can also be sourced from the `ARM_USE_AZUREAD` environment variable.
     *
     * Note: When using Azure Active Directory Authentication, you must ensure the `Storage Blob Data Owner`
     * or `Container Blob Data Owner` roles are assigned to your Storage Account.
     */
    use_azuread_auth?: boolean;
    /**
     * The Client ID of the Service Principal. This can also be sourced from the `ARM_CLIENT_ID` environment variable.
     */
    client_id?: string;
    /**
     * The password associated with the Client Certificate specified in `client_certificate_path`.
     * This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PASSWORD` environment variable.
     */
    client_certificate_password?: string;
    /**
     * The path to the PFX file used as the Client Certificate when authenticating as a Service Principal.
     * This can also be sourced from the `ARM_CLIENT_CERTIFICATE_PATH` environment variable.
     */
    client_certificate_path?: string;
    /**
     * The Client Secret of the Service Principal.
     * This can also be sourced from the `ARM_CLIENT_SECRET` environment variable.
     */
    client_secret?: string;
};
