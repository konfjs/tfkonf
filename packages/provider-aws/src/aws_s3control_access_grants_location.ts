import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3controlAccessGrantsLocationArgs {
  iam_role_arn: string;
  location_scope: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_s3control_access_grants_location extends TerraformResource {
  readonly access_grants_location_arn!: string;
  readonly access_grants_location_id!: string;
  readonly account_id?: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantsLocationArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_access_grants_location");
  }
}