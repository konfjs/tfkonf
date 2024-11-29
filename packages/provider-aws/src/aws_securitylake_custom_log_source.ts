import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecuritylakeCustomLogSourceArgsConfigurationCrawlerConfiguration {
  role_arn: string;
}
export interface AwsSecuritylakeCustomLogSourceArgsConfigurationProviderIdentity {
  external_id: string;
  principal: string;
}
export interface AwsSecuritylakeCustomLogSourceArgsConfiguration {
  crawler_configuration: AwsSecuritylakeCustomLogSourceArgsConfigurationCrawlerConfiguration;
  provider_identity: AwsSecuritylakeCustomLogSourceArgsConfigurationProviderIdentity;
}
export interface AwsSecuritylakeCustomLogSourceArgs {
  event_classes?: string[];
  source_name: string;
  configuration: AwsSecuritylakeCustomLogSourceArgsConfiguration;
}
export class aws_securitylake_custom_log_source extends TerraformResource {
  readonly attributes!: any[];
  readonly id!: string;
  readonly provider_details!: any[];
  readonly source_version?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecuritylakeCustomLogSourceArgs) {
    super(config, "resource", args, resourceName, "aws_securitylake_custom_log_source");
  }
}