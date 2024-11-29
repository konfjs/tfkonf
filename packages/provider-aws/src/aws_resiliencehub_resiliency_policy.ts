import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsResiliencehubResiliencyPolicyArgspolicyaz {
  rpo: string;
  rto: string;
}
export interface AwsResiliencehubResiliencyPolicyArgspolicyhardware {
  rpo: string;
  rto: string;
}
export interface AwsResiliencehubResiliencyPolicyArgspolicyregion {
  rpo?: string;
  rto?: string;
}
export interface AwsResiliencehubResiliencyPolicyArgspolicysoftware {
  rpo: string;
  rto: string;
}
export interface AwsResiliencehubResiliencyPolicyArgspolicy {
  az: AwsResiliencehubResiliencyPolicyArgspolicyaz;
  hardware: AwsResiliencehubResiliencyPolicyArgspolicyhardware;
  region: AwsResiliencehubResiliencyPolicyArgspolicyregion;
  software: AwsResiliencehubResiliencyPolicyArgspolicysoftware;
}
export interface AwsResiliencehubResiliencyPolicyArgstimeouts {
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
  policy: AwsResiliencehubResiliencyPolicyArgspolicy;
  timeouts: AwsResiliencehubResiliencyPolicyArgstimeouts;
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