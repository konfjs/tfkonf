import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamInstanceProfileArgs {
  path?: string;
  role?: string;
  tags?: { [key: string]: string };
}

export class aws_iam_instance_profile extends TerraformResource {
  readonly arn!: string;
  readonly create_date!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: { [key: string]: string };
  readonly unique_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsIamInstanceProfileArgs) {
    super(config, "resource", args, resourceName, "aws_iam_instance_profile");
  }
}
