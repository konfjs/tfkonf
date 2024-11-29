import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDatazoneDomainArgsSingleSignOn {
  user_assignment?: string;
}
export interface AwsDatazoneDomainArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDatazoneDomainArgs {
  description?: string;
  domain_execution_role: string;
  kms_key_identifier?: string;
  name: string;
  skip_deletion_check?: boolean;
  tags?: {
    [key: string]: string;
  };
  single_sign_on: AwsDatazoneDomainArgsSingleSignOn;
  timeouts: AwsDatazoneDomainArgsTimeouts;
}
export class aws_datazone_domain extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly portal_url!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneDomainArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_domain");
  }
}