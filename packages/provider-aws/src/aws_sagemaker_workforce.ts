import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerWorkforceArgsCognitoConfig {
  client_id: string;
  user_pool: string;
}
export interface AwsSagemakerWorkforceArgsOidcConfig {
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
export interface AwsSagemakerWorkforceArgsSourceIpConfig {
  cidrs: string[];
}
export interface AwsSagemakerWorkforceArgsWorkforceVpcConfig {
  security_group_ids?: string[];
  subnets?: string[];
  vpc_id?: string;
}
export interface AwsSagemakerWorkforceArgs {
  workforce_name: string;
  cognito_config: AwsSagemakerWorkforceArgsCognitoConfig;
  oidc_config: AwsSagemakerWorkforceArgsOidcConfig;
  source_ip_config: AwsSagemakerWorkforceArgsSourceIpConfig;
  workforce_vpc_config: AwsSagemakerWorkforceArgsWorkforceVpcConfig;
}
export class aws_sagemaker_workforce extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly subdomain!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerWorkforceArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_workforce");
  }
}