import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationS3ArgsS3Config {
  bucket_access_role_arn: string;
}

export interface AwsDatasyncLocationS3Args {
  agent_arns?: string[];
  s3_bucket_arn: string;
  subdirectory: string;
  tags?: { [key: string]: string };
  s3_config: AwsDatasyncLocationS3ArgsS3Config;
}

export class aws_datasync_location_s3 extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly s3_storage_class?: string;
  readonly tags_all?: { [key: string]: string };
  readonly uri!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationS3Args) {
    super(config, "resource", args, resourceName, "aws_datasync_location_s3");
  }
}
