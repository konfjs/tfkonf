import { TerraformConfig, TerraformResource } from "tfs";
export interface OidcJwtConfiguration {
  claim_attribute_path: string;
  identity_store_attribute_path: string;
  issuer_url: string;
  jwks_retrieval_option: string;
}
export interface TrustedTokenIssuerConfiguration {
  oidc_jwt_configuration: OidcJwtConfiguration;
}
export interface AwsSsoadminTrustedTokenIssuerArgs {
  client_token?: string;
  instance_arn: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  trusted_token_issuer_type: string;
  trusted_token_issuer_configuration: TrustedTokenIssuerConfiguration;
}
export class aws_ssoadmin_trusted_token_issuer extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsoadminTrustedTokenIssuerArgs) {
    super(config, "resource", args, resourceName, "aws_ssoadmin_trusted_token_issuer");
  }
}