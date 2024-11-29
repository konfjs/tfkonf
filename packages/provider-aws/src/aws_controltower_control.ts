import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsControltowerControlArgsParameters {
  key: string;
  value: string;
}
export interface AwsControltowerControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsControltowerControlArgs {
  control_identifier: string;
  target_identifier: string;
  parameters: AwsControltowerControlArgsParameters;
  timeouts?: AwsControltowerControlArgsTimeouts;
}
export class aws_controltower_control extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsControltowerControlArgs) {
    super(config, "resource", args, resourceName, "aws_controltower_control");
  }
}