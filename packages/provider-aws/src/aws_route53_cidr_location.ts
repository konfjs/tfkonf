import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRoute53CidrLocationArgs {
  cidr_blocks: string[];
  cidr_collection_id: string;
  name: string;
}
export class aws_route53_cidr_location extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53CidrLocationArgs) {
    super(config, "resource", args, resourceName, "aws_route53_cidr_location");
  }
}