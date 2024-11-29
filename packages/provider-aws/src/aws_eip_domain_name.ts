import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEipDomainNameArgs {
  allocation_id: string;
  domain_name: string;
  timeouts: Timeouts;
}
export class aws_eip_domain_name extends TerraformResource {
  readonly id!: string;
  readonly ptr_record!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEipDomainNameArgs) {
    super(config, "resource", args, resourceName, "aws_eip_domain_name");
  }
}