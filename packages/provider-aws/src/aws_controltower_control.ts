import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsControltowerControlArgsparameters {
  key: string;
  value: string;
}
export interface AwsControltowerControlArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsControltowerControlArgs {
  control_identifier: string;
  target_identifier: string;
  parameters: AwsControltowerControlArgsparameters;
  timeouts: AwsControltowerControlArgstimeouts;
}
export class aws_controltower_control extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsControltowerControlArgs) {
    super(config, "resource", args, resourceName, "aws_controltower_control");
  }
}