import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotDomainConfigurationArgsAuthorizerConfig {
  allow_authorizer_override?: boolean;
  default_authorizer_name?: string;
}

export interface AwsIotDomainConfigurationArgsTlsConfig {
}

export interface AwsIotDomainConfigurationArgs {
  domain_name?: string;
  name: string;
  server_certificate_arns?: string[];
  service_type?: string;
  status?: string;
  tags?: { [key: string]: string };
  validation_certificate_arn?: string;
  authorizer_config: AwsIotDomainConfigurationArgsAuthorizerConfig;
  tls_config: AwsIotDomainConfigurationArgsTlsConfig;
}

export class aws_iot_domain_configuration extends TerraformResource {
  readonly arn!: string;
  readonly domain_type!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsIotDomainConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_iot_domain_configuration");
  }
}
