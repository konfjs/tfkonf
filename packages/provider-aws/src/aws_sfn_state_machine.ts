import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSfnStateMachineArgsEncryptionConfiguration {
  kms_data_key_reuse_period_seconds?: number;
  kms_key_id?: string;
  type?: string;
}
export interface AwsSfnStateMachineArgsLoggingConfiguration {
  include_execution_data?: boolean;
  level?: string;
  log_destination?: string;
}
export interface AwsSfnStateMachineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSfnStateMachineArgsTracingConfiguration {
  enabled?: boolean;
}
export interface AwsSfnStateMachineArgs {
  definition: string;
  publish?: boolean;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  encryption_configuration: AwsSfnStateMachineArgsEncryptionConfiguration;
  logging_configuration: AwsSfnStateMachineArgsLoggingConfiguration;
  timeouts?: AwsSfnStateMachineArgsTimeouts;
  tracing_configuration: AwsSfnStateMachineArgsTracingConfiguration;
}
export class aws_sfn_state_machine extends TerraformResource {
  readonly arn!: string;
  readonly creation_date!: string;
  readonly description!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly revision_id!: string;
  readonly state_machine_version_arn!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_description!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSfnStateMachineArgs) {
    super(config, "resource", args, resourceName, "aws_sfn_state_machine");
  }
}