import { TerraformConfig, TerraformResource } from "tfs";
export interface CognitoConfig {
  client_id: string;
  user_pool: string;
}
export interface OidcConfig {
  authentication_request_extra_params?: {
    [key: string]: string;
  };
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  jwks_uri: string;
  logout_endpoint: string;
  scope?: string;
  token_endpoint: string;
  user_info_endpoint: string;
}
export interface SourceIpConfig {
  cidrs: string[];
}
export interface WorkforceVpcConfig {
  security_group_ids?: string[];
  subnets?: string[];
  vpc_id?: string;
}
export interface AwsSagemakerWorkforceArgs {
  workforce_name: string;
  cognito_config: CognitoConfig;
  oidc_config: OidcConfig;
  source_ip_config: SourceIpConfig;
  workforce_vpc_config: WorkforceVpcConfig;
}
export class aws_sagemaker_workforce extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly subdomain!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerWorkforceArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_workforce");
  }
}