import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationEfsArgsEc2Config {
  security_group_arns: string[];
  subnet_arn: string;
}

export interface AwsDatasyncLocationEfsArgs {
  access_point_arn?: string;
  efs_file_system_arn: string;
  file_system_access_role_arn?: string;
  in_transit_encryption?: string;
  subdirectory?: string;
  tags?: { [key: string]: string };
  ec2_config: AwsDatasyncLocationEfsArgsEc2Config;
}

export class aws_datasync_location_efs extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly uri!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationEfsArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_efs");
  }
}
