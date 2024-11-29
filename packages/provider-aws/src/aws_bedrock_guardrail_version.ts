import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBedrockGuardrailVersionArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsBedrockGuardrailVersionArgs {
  description?: string;
  guardrail_arn: string;
  skip_destroy?: boolean;
  timeouts: AwsBedrockGuardrailVersionArgstimeouts;
}
export class aws_bedrock_guardrail_version extends TerraformResource {
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockGuardrailVersionArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_guardrail_version");
  }
}