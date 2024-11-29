import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRoute53profilesAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRoute53profilesAssociationArgs {
  name: string;
  profile_id: string;
  resource_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsRoute53profilesAssociationArgsTimeouts;
}
export class aws_route53profiles_association extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly owner_id!: string;
  readonly status!: string;
  readonly status_message!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53profilesAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route53profiles_association");
  }
}