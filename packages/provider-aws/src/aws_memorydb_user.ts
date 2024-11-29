import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMemorydbUserArgsAuthenticationMode {
  passwords?: string[];
  type: string;
}
export interface AwsMemorydbUserArgs {
  access_string: string;
  tags?: {
    [key: string]: string;
  };
  user_name: string;
  authentication_mode: AwsMemorydbUserArgsAuthenticationMode;
}
export class aws_memorydb_user extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly minimum_engine_version!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbUserArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_user");
  }
}