import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBedrockagentAgentKnowledgeBaseAssociationArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsBedrockagentAgentKnowledgeBaseAssociationArgs {
  agent_id: string;
  description: string;
  knowledge_base_id: string;
  knowledge_base_state: string;
  timeouts: AwsBedrockagentAgentKnowledgeBaseAssociationArgstimeouts;
}
export class aws_bedrockagent_agent_knowledge_base_association extends TerraformResource {
  readonly agent_version?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockagentAgentKnowledgeBaseAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_bedrockagent_agent_knowledge_base_association");
  }
}