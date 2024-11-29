import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53ZoneAssociationArgs {
  vpc_id: string;
  zone_id: string;
}
export class aws_route53_zone_association extends TerraformResource {
  readonly id?: string;
  readonly owning_account!: string;
  readonly vpc_region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ZoneAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route53_zone_association");
  }
}