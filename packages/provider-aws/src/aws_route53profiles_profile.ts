import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53profilesProfileArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsRoute53profilesProfileArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsRoute53profilesProfileArgsTimeouts;
}
export class aws_route53profiles_profile extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly owner_id!: string;
  readonly share_status!: string;
  readonly status!: string;
  readonly status_message!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53profilesProfileArgs) {
    super(config, "resource", args, resourceName, "aws_route53profiles_profile");
  }
}