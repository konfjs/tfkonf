import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBedrockProvisionedModelThroughputArgsTimeouts {
  create?: string;
}
export interface AwsBedrockProvisionedModelThroughputArgs {
  commitment_duration?: string;
  model_arn: string;
  model_units: number;
  provisioned_model_name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsBedrockProvisionedModelThroughputArgsTimeouts;
}
export class aws_bedrock_provisioned_model_throughput extends TerraformResource {
  readonly id!: string;
  readonly provisioned_model_arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockProvisionedModelThroughputArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_provisioned_model_throughput");
  }
}