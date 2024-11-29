import { TerraformConfig, TerraformResource } from "tfs";
export interface AuthorizerConfig {
  allow_authorizer_override?: boolean;
  default_authorizer_name?: string;
}
export interface TlsConfig {}
export interface AwsIotDomainConfigurationArgs {
  domain_name?: string;
  name: string;
  server_certificate_arns?: string[];
  service_type?: string;
  status?: string;
  tags?: {
    [key: string]: string;
  };
  validation_certificate_arn?: string;
  authorizer_config: AuthorizerConfig;
  tls_config: TlsConfig;
}
export class aws_iot_domain_configuration extends TerraformResource {
  readonly arn!: string;
  readonly domain_type!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotDomainConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_iot_domain_configuration");
  }
}