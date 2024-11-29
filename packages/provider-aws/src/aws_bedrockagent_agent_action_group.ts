import { TerraformConfig, TerraformResource } from "tfs";
export interface ActionGroupExecutor {
  custom_control?: string;
  lambda?: string;
}
export interface S3 {
  s3_bucket_name?: string;
  s3_object_key?: string;
}
export interface ApiSchema {
  payload?: string;
  s3: S3;
}
export interface Parameters {
  description?: string;
  map_block_key: string;
  required?: boolean;
  type: string;
}
export interface Functions {
  description?: string;
  name: string;
  parameters: Parameters;
}
export interface MemberFunctions {
  functions: Functions;
}
export interface FunctionSchema {
  member_functions: MemberFunctions;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsBedrockagentAgentActionGroupArgs {
  action_group_name: string;
  agent_id: string;
  agent_version: string;
  description?: string;
  parent_action_group_signature?: string;
  action_group_executor: ActionGroupExecutor;
  api_schema: ApiSchema;
  function_schema: FunctionSchema;
  timeouts: Timeouts;
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