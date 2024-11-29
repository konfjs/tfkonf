import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMemorydbAclArgs {
  tags?: {
    [key: string]: string;
  };
  user_names?: string[];
}
export class aws_memorydb_acl extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly minimum_engine_version!: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbAclArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_acl");
  }
}