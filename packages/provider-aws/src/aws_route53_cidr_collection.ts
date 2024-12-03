import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRoute53CidrCollectionArgs {
  name: string;
}
export class aws_route53_cidr_collection extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53CidrCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_route53_cidr_collection");
  }
}