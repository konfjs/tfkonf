import { TerraformConfig, TerraformResource } from "tfs";
export interface SsmControls {
  concurrent_execution_rate_percentage?: number;
  error_percentage?: number;
}
export interface ExecutionControls {
  ssm_controls: SsmControls;
}
export interface Parameter {
  name: string;
  resource_value?: string;
  static_value?: string;
}
export interface AwsConfigRemediationConfigurationArgs {
  automatic?: boolean;
  config_rule_name: string;
  maximum_automatic_attempts?: number;
  resource_type?: string;
  retry_attempt_seconds?: number;
  target_id: string;
  target_type: string;
  target_version?: string;
  execution_controls: ExecutionControls;
  parameter: Parameter;
}
export class aws_config_remediation_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigRemediationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_config_remediation_configuration");
  }
}