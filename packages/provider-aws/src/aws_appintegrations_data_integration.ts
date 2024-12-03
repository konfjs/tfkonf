import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppintegrationsDataIntegrationArgsScheduleConfig {
  first_execution_from: string;
  object: string;
  schedule_expression: string;
}
export interface AwsAppintegrationsDataIntegrationArgs {
  description?: string;
  kms_key: string;
  name: string;
  source_uri: string;
  tags?: {
    [key: string]: string;
  };
  schedule_config: AwsAppintegrationsDataIntegrationArgsScheduleConfig;
}
export class aws_appintegrations_data_integration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppintegrationsDataIntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_appintegrations_data_integration");
  }
}