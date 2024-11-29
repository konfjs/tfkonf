import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3controlAccessGrantsInstanceArgs {
  identity_center_arn?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_s3control_access_grants_instance extends TerraformResource {
  readonly access_grants_instance_arn!: string;
  readonly access_grants_instance_id!: string;
  readonly account_id?: string;
  readonly id!: string;
  readonly identity_center_application_arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantsInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_access_grants_instance");
  }
}