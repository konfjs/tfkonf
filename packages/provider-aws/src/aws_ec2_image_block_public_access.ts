import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2ImageBlockPublicAccessArgsTimeouts {
  update?: string;
}
export interface AwsEc2ImageBlockPublicAccessArgs {
  state: string;
  timeouts: AwsEc2ImageBlockPublicAccessArgsTimeouts;
}
export class aws_ec2_image_block_public_access extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ImageBlockPublicAccessArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_image_block_public_access");
  }
}