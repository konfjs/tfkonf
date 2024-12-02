export type GcsBackend = {
    /**
     * The name of the GCS bucket. This name must be globally unique.
     */
    bucket: string;
    /**
     * `GOOGLE_BACKEND_CREDENTIALS` / `GOOGLE_CREDENTIALS` Local path to Google Cloud Platform account credentials in JSON format.
     * If unset, the path uses Google Application Default Credentials. The provided credentials must have
     * the Storage Object Admin role on the bucket.
     *
     * Warning: if using the Google Cloud Platform provider as well, it will also pick up the `GOOGLE_CREDENTIALS` environment variable.
     */
    credentials?: string;
    /**
     * `GOOGLE_BACKEND_IMPERSONATE_SERVICE_ACCOUNT` / `GOOGLE_IMPERSONATE_SERVICE_ACCOUNT`
     * The service account to impersonate for accessing the State Bucket. You must have `roles/iam.serviceAccountTokenCreator`
     * role on that account for the impersonation to succeed. If you are using a delegation chain, you can specify that
     * using the `impersonate_service_account_delegates` field.
     */
    impersonate_service_account?: string;
    /**
     * The delegation chain for an impersonating a service account as described {@link https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials#sa-credentials-delegated here}.
     */
    impersonate_service_account_delegates?: string[];
    /**
     * A temporary [OAuth 2.0 access token] obtained from the Google Authorization server,
     * i.e. the `Authorization: Bearer` token used to authenticate HTTP requests to GCP APIs.
     * This is an alternative to `credentials`. If both are specified,
     * `access_token` will be used over the `credentials` field.
     */
    access_token?: string;
    /**
     * GCS prefix inside the bucket. Named states for workspaces are stored in an
     * object called `<prefix>/<name>.tfstate`.
     */
    prefix?: string;
    /**
     * `GOOGLE_ENCRYPTION_KEY` A 32 byte base64 encoded 'customer-supplied encryption key'
     * used when reading and writing state files in the bucket.
     */
    encryption_key?: string;
    /**
     * `GOOGLE_KMS_ENCRYPTION_KEY` A Cloud KMS key ('customer-managed encryption key') used
     * when reading and writing state files in the bucket.
     * Format should be `projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{name}}`.
     */
    kms_encryption_key?: string;
    /**
     * `GOOGLE_BACKEND_STORAGE_CUSTOM_ENDPOINT` / `GOOGLE_STORAGE_CUSTOM_ENDPOINT`
     * A URL containing three parts: the protocol, the DNS name pointing to a Private Service Connect endpoint,
     * and the path for the Cloud Storage API (`/storage/v1/b`, {@link https://cloud.google.com/storage/docs/json_api/v1/buckets/get#http-request see here}).
     * You can either use a {@link https://cloud.google.com/vpc/docs/configure-private-service-connect-apis#configure-p-dns DNS name automatically made by the Service Directory}
     * or a {@link https://cloud.google.com/vpc/docs/configure-private-service-connect-apis#configure-dns-default custom DNS name}
     * made by you. For example, if you create an endpoint called `xyz` and want to use the automatically-created
     * DNS name, you should set the field value as `https://storage-xyz.p.googleapis.com/storage/v1/b`.
     * For help creating a Private Service Connect endpoint using Terraform, {@link https://cloud.google.com/vpc/docs/configure-private-service-connect-apis#terraform_1 see this guide}.
     */
    storage_custom_endpoint?: string;
};
