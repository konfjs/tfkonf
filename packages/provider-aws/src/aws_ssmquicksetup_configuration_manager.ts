import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmquicksetupConfigurationManagerArgsConfigurationDefinition {
  local_deployment_administration_role_arn?: string;
  local_deployment_execution_role_name?: string;
  parameters: {
    [key: string]: string;
  };
  type: string;
}
export interface AwsSsmquicksetupConfigurationManagerArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSsmquicksetupConfigurationManagerArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  configuration_definition: AwsSsmquicksetupConfigurationManagerArgsConfigurationDefinition;
  timeouts: AwsSsmquicksetupConfigurationManagerArgstimeouts;
}
export class aws_ssmquicksetup_configuration_manager extends TerraformResource {
  readonly description?: string;
  readonly manager_arn!: string;
  readonly status_summaries!: any[];
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmquicksetupConfigurationManagerArgs) {
    super(config, "resource", args, resourceName, "aws_ssmquicksetup_configuration_manager");
  }
}