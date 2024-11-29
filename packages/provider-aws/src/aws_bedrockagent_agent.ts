import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBedrockagentAgentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBedrockagentAgentArgs {
  agent_name: string;
  agent_resource_role_arn: string;
  customer_encryption_key_arn?: string;
  description?: string;
  foundation_model: string;
  guardrail_configuration?: any[];
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsBedrockagentAgentArgstimeouts;
}
export class aws_bedrockagent_agent extends TerraformResource {
  readonly agent_arn!: string;
  readonly agent_id!: string;
  readonly agent_version!: string;
  readonly id!: string;
  readonly idle_session_ttl_in_seconds?: number;
  readonly instruction?: string;
  readonly prepare_agent?: boolean;
  readonly prompt_override_configuration?: any[];
  readonly skip_resource_in_use_check?: boolean;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_agent");
  }
}