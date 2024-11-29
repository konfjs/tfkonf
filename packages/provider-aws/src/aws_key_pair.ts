import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKeyPairArgs {
  public_key: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_key_pair extends TerraformResource {
  readonly arn!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly key_name?: string;
  readonly key_name_prefix?: string;
  readonly key_pair_id!: string;
  readonly key_type!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsKeyPairArgs) {
    super(config, "resource", args, resourceName, "aws_key_pair");
  }
}