import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGameliftBuildArgsStorageLocation {
  bucket: string;
  key: string;
  object_version?: string;
  role_arn: string;
}
export interface AwsGameliftBuildArgs {
  name: string;
  operating_system: string;
  tags?: {
    [key: string]: string;
  };
  version?: string;
  storage_location: AwsGameliftBuildArgsStorageLocation;
}
export class aws_gamelift_build extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGameliftBuildArgs) {
    super(config, "resource", args, resourceName, "aws_gamelift_build");
  }
}