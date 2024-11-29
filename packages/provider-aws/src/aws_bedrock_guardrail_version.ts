import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBedrockGuardrailVersionArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsBedrockGuardrailVersionArgs {
  description?: string;
  guardrail_arn: string;
  skip_destroy?: boolean;
  timeouts: AwsBedrockGuardrailVersionArgsTimeouts;
}
export class aws_bedrock_guardrail_version extends TerraformResource {
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockGuardrailVersionArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_guardrail_version");
  }
}