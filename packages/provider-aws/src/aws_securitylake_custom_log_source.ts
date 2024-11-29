import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecuritylakeCustomLogSourceArgsconfigurationCrawlerConfiguration {
  role_arn: string;
}
export interface AwsSecuritylakeCustomLogSourceArgsconfigurationProviderIdentity {
  external_id: string;
  principal: string;
}
export interface AwsSecuritylakeCustomLogSourceArgsconfiguration {
  crawler_configuration: AwsSecuritylakeCustomLogSourceArgsconfigurationCrawlerConfiguration;
  provider_identity: AwsSecuritylakeCustomLogSourceArgsconfigurationProviderIdentity;
}
export interface AwsSecuritylakeCustomLogSourceArgs {
  event_classes?: string[];
  source_name: string;
  configuration: AwsSecuritylakeCustomLogSourceArgsconfiguration;
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