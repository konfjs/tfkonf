import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBedrockagentAgentAliasArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBedrockagentAgentAliasArgs {
  agent_alias_name: string;
  agent_id: string;
  description?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsBedrockagentAgentAliasArgsTimeouts;
}
export class aws_bedrockagent_agent_alias extends TerraformResource {
  readonly agent_alias_arn!: string;
  readonly agent_alias_id!: string;
  readonly id!: string;
  readonly routing_configuration?: any[];
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentAliasArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_agent_alias");
  }
}