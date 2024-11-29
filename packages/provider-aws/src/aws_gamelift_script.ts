import { TerraformConfig, TerraformResource } from "tfs";
export interface StorageLocation {
  bucket: string;
  key: string;
  object_version?: string;
  role_arn: string;
}
export interface AwsGameliftScriptArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  version?: string;
  zip_file?: string;
  storage_location: StorageLocation;
}
export class aws_gamelift_script extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGameliftScriptArgs) {
    super(config, "resource", args, resourceName, "aws_gamelift_script");
  }
}