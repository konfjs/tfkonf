import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsResiliencehubResiliencyPolicyArgsPolicyAz {
  rpo: string;
  rto: string;
}
export interface AwsResiliencehubResiliencyPolicyArgsPolicyHardware {
  rpo: string;
  rto: string;
}
export interface AwsResiliencehubResiliencyPolicyArgsPolicyRegion {
  rpo?: string;
  rto?: string;
}
export interface AwsResiliencehubResiliencyPolicyArgsPolicySoftware {
  rpo: string;
  rto: string;
}
export interface AwsResiliencehubResiliencyPolicyArgsPolicy {
  az: AwsResiliencehubResiliencyPolicyArgsPolicyAz;
  hardware: AwsResiliencehubResiliencyPolicyArgsPolicyHardware;
  region: AwsResiliencehubResiliencyPolicyArgsPolicyRegion;
  software: AwsResiliencehubResiliencyPolicyArgsPolicySoftware;
}
export interface AwsResiliencehubResiliencyPolicyArgsTimeouts {
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
  policy: AwsResiliencehubResiliencyPolicyArgsPolicy;
  timeouts?: AwsResiliencehubResiliencyPolicyArgsTimeouts;
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