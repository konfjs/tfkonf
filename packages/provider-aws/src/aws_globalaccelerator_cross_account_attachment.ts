import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGlobalacceleratorCrossAccountAttachmentArgsResource {
  cidr_block?: string;
  endpoint_id?: string;
  region?: string;
}
export interface AwsGlobalacceleratorCrossAccountAttachmentArgs {
  name: string;
  principals?: string[];
  tags?: {
    [key: string]: string;
  };
  resource: AwsGlobalacceleratorCrossAccountAttachmentArgsResource;
}
export class aws_globalaccelerator_cross_account_attachment extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly id!: string;
  readonly last_modified_time!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCrossAccountAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_cross_account_attachment");
  }
}