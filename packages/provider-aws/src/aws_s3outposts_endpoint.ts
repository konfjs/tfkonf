import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3outpostsEndpointArgs {
  customer_owned_ipv4_pool?: string;
  outpost_id: string;
  security_group_id: string;
  subnet_id: string;
}
export class aws_s3outposts_endpoint extends TerraformResource {
  readonly access_type?: string;
  readonly arn!: string;
  readonly cidr_block!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly network_interfaces!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3outpostsEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_s3outposts_endpoint");
  }
}