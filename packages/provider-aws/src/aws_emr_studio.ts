import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEmrStudioArgs {
  auth_mode: string;
  default_s3_location: string;
  description?: string;
  engine_security_group_id: string;
  idp_auth_url?: string;
  idp_relay_state_parameter_name?: string;
  name: string;
  service_role: string;
  subnet_ids: string[];
  tags?: { [key: string]: string };
  user_role?: string;
  vpc_id: string;
  workspace_security_group_id: string;
}

export class aws_emr_studio extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly url!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrStudioArgs) {
    super(config, "resource", args, resourceName, "aws_emr_studio");
  }
}
