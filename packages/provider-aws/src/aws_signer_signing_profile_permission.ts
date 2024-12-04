import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSignerSigningProfilePermissionArgs {
  action: string;
  principal: string;
  profile_name: string;
}

export class aws_signer_signing_profile_permission extends TerraformResource {
  readonly id?: string;
  readonly profile_version?: string;
  readonly statement_id?: string;
  readonly statement_id_prefix?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSignerSigningProfilePermissionArgs) {
    super(config, "resource", args, resourceName, "aws_signer_signing_profile_permission");
  }
}
