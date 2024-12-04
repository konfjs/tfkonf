import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTransferProfileArgs {
  as2_id: string;
  certificate_ids?: string[];
  profile_type: string;
  tags?: { [key: string]: string };
}

export class aws_transfer_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly profile_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferProfileArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_profile");
  }
}
