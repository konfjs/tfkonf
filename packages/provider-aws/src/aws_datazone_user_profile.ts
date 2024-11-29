import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsDatazoneUserProfileArgs {
  domain_identifier: string;
  user_identifier: string;
  timeouts: Timeouts;
}
export class aws_datazone_user_profile extends TerraformResource {
  readonly details!: any[];
  readonly id!: string;
  readonly status?: string;
  readonly type!: string;
  readonly user_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneUserProfileArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_user_profile");
  }
}