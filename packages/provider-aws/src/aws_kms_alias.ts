import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKmsAliasArgs {
  target_key_id: string;
}
export class aws_kms_alias extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly target_key_arn!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsAliasArgs) {
    super(config, "resource", args, resourceName, "aws_kms_alias");
  }
}