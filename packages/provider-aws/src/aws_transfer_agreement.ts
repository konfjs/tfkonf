import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTransferAgreementArgs {
  access_role: string;
  base_directory: string;
  description?: string;
  local_profile_id: string;
  partner_profile_id: string;
  server_id: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_transfer_agreement extends TerraformResource {
  readonly agreement_id!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferAgreementArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_agreement");
  }
}