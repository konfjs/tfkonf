import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBedrockagentAgentActionGroupArgsActionGroupExecutor {
  custom_control?: string;
  lambda?: string;
}
export interface AwsBedrockagentAgentActionGroupArgsApiSchemaS3 {
  s3_bucket_name?: string;
  s3_object_key?: string;
}
export interface AwsBedrockagentAgentActionGroupArgsApiSchema {
  payload?: string;
  s3: AwsBedrockagentAgentActionGroupArgsApiSchemaS3;
}
export interface AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctionsParameters {
  description?: string;
  map_block_key: string;
  required?: boolean;
  type: string;
}
export interface AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctions {
  description?: string;
  name: string;
  parameters: AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctionsParameters;
}
export interface AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctions {
  functions: AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctionsFunctions;
}
export interface AwsBedrockagentAgentActionGroupArgsFunctionSchema {
  member_functions: AwsBedrockagentAgentActionGroupArgsFunctionSchemaMemberFunctions;
}
export interface AwsBedrockagentAgentActionGroupArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsBedrockagentAgentActionGroupArgs {
  action_group_name: string;
  agent_id: string;
  agent_version: string;
  description?: string;
  parent_action_group_signature?: string;
  action_group_executor: AwsBedrockagentAgentActionGroupArgsActionGroupExecutor;
  api_schema: AwsBedrockagentAgentActionGroupArgsApiSchema;
  function_schema: AwsBedrockagentAgentActionGroupArgsFunctionSchema;
  timeouts: AwsBedrockagentAgentActionGroupArgsTimeouts;
}
export class aws_bedrockagent_agent_action_group extends TerraformResource {
  readonly action_group_id!: string;
  readonly action_group_state?: string;
  readonly id!: string;
  readonly prepare_agent?: boolean;
  readonly skip_resource_in_use_check?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentActionGroupArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_agent_action_group");
  }
}