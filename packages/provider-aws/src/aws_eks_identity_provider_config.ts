import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEksIdentityProviderConfigArgsOidc {
  client_id: string;
  groups_claim?: string;
  groups_prefix?: string;
  identity_provider_config_name: string;
  issuer_url: string;
  required_claims?: {
    [key: string]: string;
  };
  username_claim?: string;
  username_prefix?: string;
}
export interface AwsEksIdentityProviderConfigArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEksIdentityProviderConfigArgs {
  cluster_name: string;
  tags?: {
    [key: string]: string;
  };
  oidc: AwsEksIdentityProviderConfigArgsOidc;
  timeouts?: AwsEksIdentityProviderConfigArgsTimeouts;
}
export class aws_eks_identity_provider_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEksIdentityProviderConfigArgs) {
    super(config, "resource", args, resourceName, "aws_eks_identity_provider_config");
  }
}