import { TerraformConfig, TerraformResource } from "tfs";
export interface Az {
  rpo: string;
  rto: string;
}
export interface Hardware {
  rpo: string;
  rto: string;
}
export interface Region {
  rpo?: string;
  rto?: string;
}
export interface Software {
  rpo: string;
  rto: string;
}
export interface Policy {
  az: Az;
  hardware: Hardware;
  region: Region;
  software: Software;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsResiliencehubResiliencyPolicyArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  tier: string;
  policy: Policy;
  timeouts: Timeouts;
}
export class aws_resiliencehub_resiliency_policy extends TerraformResource {
  readonly arn!: string;
  readonly data_location_constraint?: string;
  readonly estimated_cost_tier!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsResiliencehubResiliencyPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_resiliencehub_resiliency_policy");
  }
}