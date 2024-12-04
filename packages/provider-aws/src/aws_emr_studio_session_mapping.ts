import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrStudioSessionMappingArgs {
  identity_type: string;
  session_policy_arn: string;
  studio_id: string;
}

export class aws_emr_studio_session_mapping extends TerraformResource {
  readonly id?: string;
  readonly identity_id?: string;
  readonly identity_name?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrStudioSessionMappingArgs) {
    super(config, "resource", args, resourceName, "aws_emr_studio_session_mapping");
  }
}
