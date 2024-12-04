import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessTrustProviderArgsDeviceOptions {
  tenant_id?: string;
}

export interface AwsVerifiedaccessTrustProviderArgsOidcOptions {
  authorization_endpoint?: string;
  client_id?: string;
  client_secret: string;
  issuer?: string;
  scope?: string;
  token_endpoint?: string;
  user_info_endpoint?: string;
}

export interface AwsVerifiedaccessTrustProviderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVerifiedaccessTrustProviderArgs {
  description?: string;
  device_trust_provider_type?: string;
  policy_reference_name: string;
  tags?: { [key: string]: string };
  trust_provider_type: string;
  user_trust_provider_type?: string;
  device_options: AwsVerifiedaccessTrustProviderArgsDeviceOptions;
  oidc_options: AwsVerifiedaccessTrustProviderArgsOidcOptions;
  timeouts?: AwsVerifiedaccessTrustProviderArgsTimeouts;
}

export class aws_verifiedaccess_trust_provider extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessTrustProviderArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_trust_provider");
  }
}
