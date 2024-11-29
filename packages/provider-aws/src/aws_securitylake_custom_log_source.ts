import { TerraformConfig, TerraformResource } from "tfs";
export interface CrawlerConfiguration {
  role_arn: string;
}
export interface ProviderIdentity {
  external_id: string;
  principal: string;
}
export interface Configuration {
  crawler_configuration: CrawlerConfiguration;
  provider_identity: ProviderIdentity;
}
export interface AwsSecuritylakeCustomLogSourceArgs {
  event_classes?: string[];
  source_name: string;
  configuration: Configuration;
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