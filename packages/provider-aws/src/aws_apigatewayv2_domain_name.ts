import { TerraformConfig, TerraformResource } from "tfs";
export interface DomainNameConfiguration {
  certificate_arn: string;
  endpoint_type: string;
  security_policy: string;
}
export interface MutualTlsAuthentication {
  truststore_uri: string;
  truststore_version?: string;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsApigatewayv2DomainNameArgs {
  domain_name: string;
  tags?: {
    [key: string]: string;
  };
  domain_name_configuration: DomainNameConfiguration;
  mutual_tls_authentication: MutualTlsAuthentication;
  timeouts: Timeouts;
}
export class aws_apigatewayv2_domain_name extends TerraformResource {
  readonly api_mapping_selection_expression!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApigatewayv2DomainNameArgs) {
    super(config, "resource", args, resourceName, "aws_apigatewayv2_domain_name");
  }
}