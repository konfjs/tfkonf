import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3controlMultiRegionAccessPointPolicyArgsdetails {
  name: string;
  policy: string;
}
export interface AwsS3controlMultiRegionAccessPointPolicyArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsS3controlMultiRegionAccessPointPolicyArgs {
  details: AwsS3controlMultiRegionAccessPointPolicyArgsdetails;
  timeouts: AwsS3controlMultiRegionAccessPointPolicyArgstimeouts;
}
export class aws_s3control_multi_region_access_point_policy extends TerraformResource {
  readonly account_id?: string;
  readonly established!: string;
  readonly id?: string;
  readonly proposed!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlMultiRegionAccessPointPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_multi_region_access_point_policy");
  }
}