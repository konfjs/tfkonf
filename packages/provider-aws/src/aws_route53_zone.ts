import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53ZoneArgsVpc {
  vpc_id: string;
}

export interface AwsRoute53ZoneArgs {
  comment?: string;
  delegation_set_id?: string;
  force_destroy?: boolean;
  name: string;
  tags?: { [key: string]: string };
  vpc: AwsRoute53ZoneArgsVpc;
}

export class aws_route53_zone extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name_servers!: string[];
  readonly primary_name_server!: string;
  readonly tags_all?: { [key: string]: string };
  readonly zone_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ZoneArgs) {
    super(config, "resource", args, resourceName, "aws_route53_zone");
  }
}
