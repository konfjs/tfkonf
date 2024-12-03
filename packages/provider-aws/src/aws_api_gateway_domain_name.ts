import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApiGatewayDomainNameArgsEndpointConfiguration {
  types: string[];
}
export interface AwsApiGatewayDomainNameArgsMutualTlsAuthentication {
  truststore_uri: string;
  truststore_version?: string;
}
export interface AwsApiGatewayDomainNameArgs {
  certificate_arn?: string;
  certificate_body?: string;
  certificate_chain?: string;
  certificate_name?: string;
  certificate_private_key?: string;
  domain_name: string;
  regional_certificate_arn?: string;
  regional_certificate_name?: string;
  tags?: {
    [key: string]: string;
  };
  endpoint_configuration: AwsApiGatewayDomainNameArgsEndpointConfiguration;
  mutual_tls_authentication: AwsApiGatewayDomainNameArgsMutualTlsAuthentication;
}
export class aws_api_gateway_domain_name extends TerraformResource {
  readonly arn!: string;
  readonly certificate_upload_date!: string;
  readonly cloudfront_domain_name!: string;
  readonly cloudfront_zone_id!: string;
  readonly id?: string;
  readonly ownership_verification_certificate_arn?: string;
  readonly regional_domain_name!: string;
  readonly regional_zone_id!: string;
  readonly security_policy?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayDomainNameArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_domain_name");
  }
}